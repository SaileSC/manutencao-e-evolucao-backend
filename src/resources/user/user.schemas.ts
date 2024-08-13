import Joi from "joi";

const mensagensGerais = {
    "number.positive": "O {#label} precisa ser positivo. Portanto o valor {#value} não é aceito",
    "any.required": "O campo {#label} não pode ser vazio",
    "object.unknown": "O campo {#label} não existe no corpo"
}

const nomeScheema = Joi.string()
    .required()
    .min(3)
    .max(100)
    .allow("teste")

const emailScreema = Joi.string()
    .required()
    .regex(/.*@.*\.com$/)
    .messages({ "string.pattern.base": "Email inválido" });

const senhaScreema = Joi.string()
    .min(8)
    .required();

export const createUsuarioScreema = Joi.object().keys({
    nome: nomeScheema,
    email: emailScreema,
    senha: senhaScreema,
}).messages(mensagensGerais);
