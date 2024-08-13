import { ChangeRequest } from "@prisma/client";

export type RequestDTO = Pick<
  ChangeRequest,
  | "id"
  | "nomeSolicitante"
  | "nomeSistema"
  | "descricaoRequisicao"
  | "data"
  | "anexo"
  | "dataFechamento"
  | "statusRequisicao"
>;

export type RequestCreateDTO = Omit<
  RequestDTO,
  "id" | "dataFechamento" | "statusRequisicao" | "data"
>;
