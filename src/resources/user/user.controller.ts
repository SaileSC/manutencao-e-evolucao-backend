import { Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import {
  createUser,
  findLogin,
  findName,
  getUser,
  listUsers,
  removeUser,
  updateUser,
  usedEmail,
} from "./user.service";
import { UpdateUserDto } from "./user.types";

const index = async (req: Request, res: Response) => {
  try {
    const allUsuarios = await listUsers();
    res.status(StatusCodes.OK).json(allUsuarios);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const create = async (req: Request, res: Response) => {
  const user = req.body;
  try {
    if (!(await usedEmail(user.email))) {
      const newUser = await createUser(user);
      res.status(StatusCodes.OK).json(newUser);
    } else {
      res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const read = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const usuario = await getUser(id);
    if (!usuario)
      return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    res.status(StatusCodes.OK).json(usuario);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const update = async (req: Request, res: Response) => {
  const user = req.body as UpdateUserDto;
  try {
    const update = await updateUser(user);
    if (!update)
      res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    res.status(StatusCodes.OK).json(update);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const remove = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deleted = await removeUser(id);
    if (!deleted)
      res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    res.status(StatusCodes.OK).json(deleted);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const searchLogin = async (req: Request, res: Response) => {
  const { login } = req.params;
  try {
    const users = await findLogin(login);
    if (!users)
      return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    res.status(StatusCodes.OK).json(users);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const searchName = async (req: Request, res: Response) => {
  const { name } = req.params;
  try {
    const users = await findName(name);
    if (!users)
      return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    res.status(StatusCodes.OK).json(users);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

export default { index, create, read, update, remove, searchLogin, searchName };
