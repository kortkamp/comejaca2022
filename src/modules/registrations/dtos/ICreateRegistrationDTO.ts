interface ICreateRegistrationDTO {
  nome_completo: string;
  nome_cracha: string;
  email: string;
  data_nascimento: string;
  dados_pessoais: string;
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

  instituicao: string;
}

export { ICreateRegistrationDTO };
