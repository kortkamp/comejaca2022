interface IRegistration {
  id: string;
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

  instituicao: string;

  created_at: Date;
  updated_at: Date;
}

export { IRegistration };

/*
{
  "_id": {
      "$oid": "6282a8bb837f56c507deb931"
  },
  "dados_pessoais": {
      "nome_completo": "Marcelo Teixeira",
      "nome_cracha": "Marcelo3333",
      "email": "marcelusmedius@gmail.com",
      "data_nascimento": "2001-01-01",
      "idade": "21",
      "sexo": "M",
      "genero": "Cisgenero",
      "telefone": "(22) 11111-1111",
      "endereco": {
          "cep": "28495-970",
          "endereco": "Rua Mathias Ferreira da Silva",
          "estado": "RJ",
          "cidade": "Aperibé",
          "bairro": "Centro",
          "numero": "1"
      }
  },
  "questionario": [{
      "nome": "Já participou de outras comejacas ?",
      "resposta": "S",
      "quantas": "44"
  }, {
      "nome": "Possui algum tipo de alergia ?",
      "resposta": "N",
      "quais": ""
  }, {
      "nome": "Possui alguma doença cronica? ",
      "resposta": "S",
      "quais": "preguiça"
  }, {
      "nome": "Faz um rotineiro de medicação ?",
      "resposta": "S",
      "quais": "alcool"
  }, {
      "nome": "Faz uso de alimentação vegetarian ?",
      "resposta": "N",
      "quais": ""
  }, {
      "nome": "Possui plano de saúde ?",
      "resposta": "S",
      "telefone_convenio": "undefined"
  }],
  "instituicao": {
      "tempo_instituicao": "1",
      "nome": "Instituição Espirita",
      "endereco": {
          "cep": "28570-970",
          "endereco": "rua principal",
          "cidade": "Itaocara",
          "bairro": "centro"
      }
  },
  "tipo": "Confraternista",
  "comissao": "",
  "incluir_camisa": "S",
  "tamanho_camisa": "G",
  "created_at": {
      "$date": "2022-05-16T19:40:43.942Z"
  }
}

*/
