import { compare } from "bcryptjs";
import { loginDto } from "./auth.types";
import { PrismaClient } from "@prisma/client";
import { UserDto } from "../user/user.types";

const prisma = new PrismaClient();

export const checkCredentials = async (
  credentials: loginDto
): Promise<UserDto | null> => {
  const usuario = await prisma.user.findUnique({
    where: { email: credentials.email },
  });

  if (!usuario) return null;
  const ok = await compare(credentials.senha, usuario.senha);
  if (!ok) return null;

  const { senha, ...usuarioAuth } = usuario;
  return usuarioAuth;

  //     return {
  //         id: usuario.id,
  //         nome: usuario.email,
  //         email: usuario.email,
  //         tipoUsuarioid:usuario.tipoUsuarioid,
  //         createdAt: usuario.createdAt,
  //         updatedAt: usuario.updatedAt
  //    }
};
