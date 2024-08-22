import { PrismaClient } from "@prisma/client";
import { RequestCreateDTO, RequestDTO } from "./request.types";

const prisma = new PrismaClient();

export const createRequest = async (
  request: RequestCreateDTO
): Promise<RequestDTO> => {
  return await prisma.changeRequest.create({
    data: { ...request, statusRequisicao: 1 },
  });
};

export const readRequest = async (id: string) => {
  return await prisma.changeRequest.findUnique({
    where: { id },
  });
};

export const listRequest = async (): Promise<RequestDTO[]> => {
  return await prisma.changeRequest.findMany();
};

export const removeRequest = async (id: string): Promise<RequestDTO> => {
  return await prisma.changeRequest.delete({
    where: { id },
  });
};

export const updateRequest = async (
  request: RequestDTO
): Promise<RequestDTO> => {
  return await prisma.changeRequest.update({
    where: {
      id: request.id,
    },
    data: {
      ...request,
    },
  });
};
