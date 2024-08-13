import { User } from "@prisma/client";

export type loginDto = Pick<User, "email" | "senha">;
