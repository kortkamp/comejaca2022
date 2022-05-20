import { celebrate, Joi, Segments } from 'celebrate';

export const createRegistrationValidate = celebrate(
  {
    [Segments.BODY]: {
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

      questionario: Joi.string().min(3).max(100).required(),

      tipo: Joi.string().min(3).max(100).required(),
      comissao: Joi.string().min(3).max(100).required(),
      gfe: Joi.string().min(1).max(100).required(),
      incluir_camisa: Joi.string().valid('S', 'N'),
      tamanho_camisa: Joi.string().min(1).max(100).required(),

      tempo_instituicao: Joi.string().min(1).max(100).required(),
      nome_instituicao: Joi.string().min(3).max(100).required(),
      endereco_instituicao: Joi.string().min(3).max(100).required(),
      cep_instituicao: Joi.string().min(3).max(100).required(),
      cidade_instituicao: Joi.string().min(3).max(100).required(),
      bairro_instituicao: Joi.string().min(3).max(100).required(),
      telefone_instituicao: Joi.string().min(3).max(100).required(),
    },
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
    [Segments.BODY]: {
      name: Joi.string().min(3).max(100),
    },
  },
  {
    abortEarly: false,
  },
);
