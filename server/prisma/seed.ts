import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = "user@example.com";
  const plain = "P@ssw0rd!";
  const passwordHash = await bcrypt.hash(plain, 10);

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    console.log("User already exists:", email);
    return;
  }

  await prisma.user.create({
    data: { email, passwordHash },
  });

  console.log("Seeded user:", email, "password:", plain);
}

main().finally(() => prisma.$disconnect());
