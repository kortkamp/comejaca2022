import { celebrate, Joi, Segments } from 'celebrate';

const schema = {
  nome_completo: Joi.string().min(3).max(100).required(),
  nome_cracha: Joi.string().min(3).max(100).required(),
  email: Joi.string().min(3).max(100).required(),
  data_nascimento: Joi.string().min(3).max(100).required(),
  idade: Joi.number().integer().required(),
  sexo: Joi.string().min(1).max(100).required(),
  genero: Joi.string().min(3).max(100).required(),
  telefone: Joi.string().min(3).max(100).required(),
  cep: Joi.string().min(3).max(100).required(),
  endereco: Joi.string().min(3).max(100).required(),
  estado: Joi.string().min(2).max(100).required(),
  cidade: Joi.string().min(3).max(100).required(),
  bairro: Joi.string().min(3).max(100).required(),
  numero: Joi.string().min(1).max(100).required(),
  complemento: Joi.string().min(3).max(100),

  questionario: Joi.string().required(),

  tipo: Joi.string().min(3).max(100).required(),
  comissao: Joi.string().max(100).allow(''),
  gfe: Joi.string().min(1).max(100),
  incluir_camisa: Joi.string().valid('S', 'N'),
  tamanho_camisa: Joi.string().min(1).max(100),

  tempo_instituicao: Joi.string().min(1).max(100).required(),
  nome_instituicao: Joi.string().min(3).max(100).required(),
  endereco_instituicao: Joi.string().min(3).max(100).required(),
  cep_instituicao: Joi.string().min(3).max(100).required(),
  cidade_instituicao: Joi.string().min(3).max(100).required(),
  bairro_instituicao: Joi.string().min(3).max(100).required(),
};

export const createRegistrationValidate = celebrate(
  {
    [Segments.BODY]: schema,
  },
  {
    abortEarly: false,
  },
);

export const showRegistrationValidate = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
});

export const updateRegistrationValidate = celebrate(
  {
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: schema,
  },
  {
    abortEarly: false,
  },
);
