import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  //await prisma.user.createMany()
  // const newRequest = await prisma.changeRequest.create({
  //   data: {
  //     nomeSolicitante: "João da Silva",
  //     nomeSistema: "Sistema de Gestão",
  //     descricaoRequisicao: "Solicitação de aumento de capacidade do servidor",
  //     statusRequisicao: 1,
  //     anexo: Buffer.from("exemplo de dados binários"),
  //     dataFechamento: new Date("2024-08-20"),
  //   },
  // });
};

seed()
  .then(() => {
    prisma.$disconnect();
  })
  .catch((err) => {
    console.log(err);
    prisma.$disconnect();
  });
