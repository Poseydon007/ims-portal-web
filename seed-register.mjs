/**
 * Seed the ims_register table from the extracted XLSX data.
 * Run with: node seed-register.mjs
 */
import { createRequire } from 'module';
import { readFileSync } from 'fs';
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as dotenv from 'dotenv';

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error('DATABASE_URL not set');
  process.exit(1);
}

// Parse the extracted JSON seed data
const rawData = JSON.parse(readFileSync('/home/ubuntu/register_seed.json', 'utf-8'));

// Map status values: MERGED → MERGED (keep as-is, it's in our enum)
function normalizeStatus(s) {
  const upper = (s || '').toUpperCase().trim();
  if (upper === 'ACTIVE') return 'ACTIVE';
  if (upper === 'RETIRED') return 'RETIRED';
  if (upper === 'MERGED') return 'MERGED';
  if (upper === 'LEGACY') return 'LEGACY';
  return 'ACTIVE';
}

// Extract short type code from full label e.g. "FRM — Form / Template" → "FRM"
function extractCode(label) {
  if (!label) return '';
  const match = label.match(/^([A-Z]+)\s*[—\-]/);
  return match ? match[1] : label.trim();
}

// Extract short dept code from full label e.g. "HSE — Health, Safety & Environment" → "HSE"
function extractDeptCode(label) {
  if (!label) return '';
  const match = label.match(/^([A-Z]+)\s*[—\-]/);
  return match ? match[1] : label.trim();
}

const entries = rawData.map(row => ({
  code: row.code,
  type: extractCode(row.type),
  typeLabel: row.type || null,
  department: extractDeptCode(row.department),
  departmentLabel: row.department || null,
  seq: row.seq || null,
  rev: row.rev || null,
  title: row.title,
  format: row.format || null,
  status: normalizeStatus(row.status),
  filename: row.filename || null,
  note: row.note || null,
  viewUrl: null,
  createdByUserId: null,
  updatedByUserId: null,
})).filter(e => e.code && e.title);

console.log(`Prepared ${entries.length} entries for seeding`);

const connection = await mysql.createConnection(DATABASE_URL);
const db = drizzle(connection);

// Insert in batches of 50 using raw SQL to avoid drizzle schema import issues
let inserted = 0;
let skipped = 0;

for (let i = 0; i < entries.length; i += 50) {
  const batch = entries.slice(i, i + 50);
  for (const e of batch) {
    try {
      await connection.execute(
        `INSERT INTO ims_register 
          (code, type, typeLabel, department, departmentLabel, seq, rev, title, format, status, filename, note, viewUrl, createdByUserId, updatedByUserId, createdAt, updatedAt)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
         ON DUPLICATE KEY UPDATE updatedAt = NOW()`,
        [e.code, e.type, e.typeLabel, e.department, e.departmentLabel, e.seq, e.rev, e.title, e.format, e.status, e.filename, e.note, e.viewUrl, e.createdByUserId, e.updatedByUserId]
      );
      inserted++;
    } catch (err) {
      console.warn(`Skipped ${e.code}:`, err.message);
      skipped++;
    }
  }
}

await connection.end();
console.log(`✅ Seeded ${inserted} entries, skipped ${skipped}`);
