import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  //await prisma.user.createMany()
};

seed()
  .then(() => {
    prisma.$disconnect();
  })
  .catch((err) => {
    console.log(err);
    prisma.$disconnect();
  });
