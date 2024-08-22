import { ChangeRequest } from "@prisma/client";

export type RequestDTO = Pick<
  ChangeRequest,
  | "id"
  | "nomeSolicitante"
  | "nomeSistema"
  | "descricaoRequisicao"
  | "dataCriacao"
  | "anexo"
  | "dataFechamento"
  | "statusRequisicao"
>;

export type RequestCreateDTO = Omit<
  RequestDTO,
  "id" | "dataFechamento" | "statusRequisicao" | "data"
>;
