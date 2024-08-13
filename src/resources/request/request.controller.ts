import { Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { RequestCreateDTO } from "./request.types";
import { createRequest, listRequest } from "./request.service";

const index = async (req: Request, res: Response) => {
  try {
    const data = await listRequest();
    if (!data)
      return res
        .status(StatusCodes.NOT_MODIFIED)
        .json(ReasonPhrases.NO_CONTENT);
    res.status(StatusCodes.OK).json(data);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const create = async (req: Request, res: Response) => {
  const body = req.body as RequestCreateDTO;
  try {
    const create = await createRequest(body);
    if (!create)
      return res
        .status(StatusCodes.NOT_MODIFIED)
        .json(ReasonPhrases.NOT_MODIFIED);

    res.status(StatusCodes.OK).json(create);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const read = async (req: Request, res: Response) => {};
const remove = async (req: Request, res: Response) => {};
const update = async (req: Request, res: Response) => {};

export default { index, create, read, remove, update };
