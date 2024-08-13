import { User } from "@prisma/client";

export type CreateUserDto = Pick<User, "nome" | "login" | "email" | "senha">;
export type UpdateUserDto = Pick<User, "nome" | "login" | "email" | "senha">;
export type UserDto = Omit<User, "senha">;
