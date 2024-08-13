import { Usuario } from "@prisma/client";

export type loginDto = Pick<Usuario, "email" | "senha">
