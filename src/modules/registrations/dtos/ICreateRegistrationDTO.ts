interface ICreateRegistrationDTO {
  nome_completo: string;
  nome_cracha: string;
  email: string;
  data_nascimento: string;
  idade: string;
  sexo: string;
  genero: string;
  telefone: string;
  cep: string;
  endereco: string;
  estado: string;
  cidade: string;
  bairro: string;
  numero: string;

  questionario: string;

  tipo: string;
  comissao: string;
  incluir_camisa: 'S' | 'N';
  tamanho_camisa: string;

  tempo_instituicao: string;
  nome_instituicao: string;
  endereco_instituicao: string;
  cep_instituicao: string;
  cidade_instituicao: string;
  bairro_instituicao: string;
}

export { ICreateRegistrationDTO };
