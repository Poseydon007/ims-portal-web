// Seed script: Create first admin user for IMS Portal
import 'dotenv/config';
import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error('DATABASE_URL not set');
  process.exit(1);
}

const email = 'melo.j@tru-east.com';
const password = 'Admin@2026';
const fullName = 'Melo J.';
const employeeId = 'TE-CEO-001';
const role = 'admin';
const department = 'Management';

async function main() {
  const passwordHash = await bcrypt.hash(password, 12);
  
  const connection = await mysql.createConnection(DATABASE_URL);
  
  // Check if user already exists
  const [existing] = await connection.execute(
    'SELECT id FROM ims_users WHERE email = ?',
    [email]
  );
  
  if (existing.length > 0) {
    console.log(`User ${email} already exists (id: ${existing[0].id}). Updating to admin...`);
    await connection.execute(
      'UPDATE ims_users SET role = ?, status = ?, passwordHash = ? WHERE email = ?',
      [role, 'active', passwordHash, email]
    );
    console.log('Updated successfully.');
  } else {
    await connection.execute(
      'INSERT INTO ims_users (email, passwordHash, fullName, employeeId, role, department, status) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [email, passwordHash, fullName, employeeId, role, department, 'active']
    );
    console.log(`Admin user created: ${email}`);
  }
  
  await connection.end();
  console.log('Done.');
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
