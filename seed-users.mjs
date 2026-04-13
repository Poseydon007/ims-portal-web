/**
 * Seed script: Add provisory test users for approval workflow trial.
 * Run: node seed-users.mjs
 */
import { createConnection } from "mysql2/promise";
import { createHash } from "crypto";
import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";

const scryptAsync = promisify(scrypt);

async function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const derivedKey = await scryptAsync(password, salt, 64);
  return `${salt}:${derivedKey.toString("hex")}`;
}

// Read DATABASE_URL from environment
const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) {
  console.error("DATABASE_URL environment variable is required");
  process.exit(1);
}

// Parse MySQL URL: mysql://user:pass@host:port/dbname
const url = new URL(dbUrl);
const connection = await createConnection({
  host: url.hostname,
  port: parseInt(url.port || "3306"),
  user: url.username,
  password: url.password,
  database: url.pathname.slice(1),
  ssl: { rejectUnauthorized: false },
});

const users = [
  {
    email: "melo.j@sifa-plus.com",
    fullName: "Abduljawad Bouguelta",
    role: "admin",           // HSE Officer → admin role
    employeeId: "HSE-001",
    department: "HSE",
    position: "HSE Officer",
    status: "active",
    password: "TrueEast2026!",
  },
  {
    email: "melo.j@sifa-sa.com",
    fullName: "Mahmoud Sifa",
    role: "supervisor",
    employeeId: "SUP-001",
    department: "Operations – Drilling",
    position: "Supervisor",
    status: "active",
    password: "TrueEast2026!",
  },
];

for (const u of users) {
  // Check if user already exists
  const [existing] = await connection.execute(
    "SELECT id FROM ims_users WHERE email = ?",
    [u.email.toLowerCase()]
  );
  if (existing.length > 0) {
    console.log(`User already exists: ${u.email} — skipping`);
    continue;
  }
  const passwordHash = await hashPassword(u.password);
  await connection.execute(
    `INSERT INTO ims_users (email, passwordHash, fullName, role, employeeId, department, position, status, createdAt)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
    [
      u.email.toLowerCase(),
      passwordHash,
      u.fullName,
      u.role,
      u.employeeId,
      u.department,
      u.position,
      u.status,
    ]
  );
  console.log(`✓ Created user: ${u.fullName} (${u.email}) — role: ${u.role}`);
}

await connection.end();
console.log("\nDone. Both users can now log in with password: TrueEast2026!");
console.log("You can change passwords via Admin > Users after logging in.");
