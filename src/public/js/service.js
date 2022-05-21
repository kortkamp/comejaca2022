// const domain = "https://www.comejaca.org.br"
const domain = 'http://localhost:3003';

// POST

async function submitForm(event) {
  event.preventDefault();
  const form = event.target;

  function getValue(tag) {
    try {
      return form.querySelector(`input[name=${tag}]`).value;
    } catch (error) {
      try {
        return form.querySelector(`select[name=${tag}]`).value;
      } catch (error) {
        console.log('elemento nao encontrado, tagname = ', tag);
      }
    }
  }

  const inscricao = {
    nome_completo: getValue('nome_completo'),
    nome_cracha: getValue('nome_cracha'),
    email: getValue('email'),
    data_nascimento: getValue('data_nascimento'),
    idade: getValue('idade'),
    sexo: getValue('sexo'),
    genero: getValue('genero'),
    telefone: getValue('telefone'),
    cep: getValue('CEP'),
    endereco: getValue('endereco'),
    estado: getValue('estado'),
    cidade: getValue('cidade'),
    bairro: getValue('bairro'),
    numero: getValue('numero'),
    tipo: getValue('tipo_participacao'),
    comissao: getValue('comissao'),
    gfe: '1',
    incluir_camisa: getValue('incluir_camisa'),
    tamanho_camisa: getValue('tamanho_camisa'),
    tempo_instituicao: getValue('tempo_instituicao'),
    nome_instituicao: getValue('nome_instituicao'),
    endereco_instituicao: getValue('endereco_instituicao'),
    cep_instituicao: getValue('cep_instituicao'),
    cidade_instituicao: getValue('cidade_instituicao'),
    bairro_instituicao: getValue('bairro_instituicao'),
    telefone_instituicao: getValue('telefone_instituicao'),

    questionario: JSON.stringify([
      {
        nome: 'Já participou de outras comejacas ?',
        resposta: getValue('comejacas'),
        quantas: getValue('quantas'),
      },
      {
        nome: 'Possui algum tipo de alergia ?',
        resposta: getValue('alergia'),
        quais: getValue('quais_alergia'),
      },
      {
        nome: 'Possui alguma doença cronica? ',
        resposta: getValue('doenca'),
        quais: getValue('quais_doenca'),
      },
      {
        nome: 'Faz um rotineiro de medicação ?',
        resposta: getValue('medicacao'),
        quais: getValue('quais_medicacao'),
      },
      {
        nome: 'Faz uso de alimentação vegetarian ?',
        resposta: getValue('vegetariano'),
        quais: getValue('quais_vegetariano'),
      },
      {
        nome: 'Possui plano de saúde ?',
        resposta: getValue('plano_de_saude'),
        telefone_convenio: getValue('telefone_plano'),
      },
    ]),
  };

  console.log(inscricao);
  const res = await fetch(`${domain}/api/registrations/`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(inscricao),
  });
  console.log(JSON.parse(await res.text()));
  window.location.pathname = 'confirmacao_inscricao.html';
}

// GET

async function fillForm() {
  function setValue(tag, value) {
    try {
      document.querySelector(`input[name=${tag}]`).value = value;
    } catch (error) {
      try {
        document.querySelector(`select[name=${tag}]`).value = value;
      } catch (error) {
        console.log('elemento nao encontrado, tagname = ', tag);
      }
    }
  }

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const res = await fetch(`${domain}/api/registrations/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });

  const inscricao = JSON.parse(await res.text());

  setValue('nomecompleto', inscricao.registration.nome_completo);
  setValue('nome_cracha', inscricao.registration.nome_cracha);
  setValue('email', inscricao.registration.email);
  setValue('data_nascimento', inscricao.registration.data_nascimento);
  setValue('idade', inscricao.registration.idade);
  setValue('sexo', inscricao.registration.sexo);
  setValue('genero', inscricao.registration.genero);
  setValue('telefone', inscricao.registration.telefone);

  setValue('CEP', inscricao.registration.cep);
  setValue('endereco', inscricao.registration.endereco);
  setValue('estado', inscricao.registration.estado);
  setValue('cidade', inscricao.registration.cidade);
  setValue('bairro', inscricao.registration.bairro);
  setValue('numero', inscricao.registration.numero);

  setValue('tipo_participacao', inscricao.registration.tipo);
  setValue('comissao', inscricao.registration.incluir_camisa);
  setValue('camisa', inscricao.registration.incluir_camisa);
  setValue('tamanho_camisa', inscricao.registration.tamanho_camisa);

  // {
  //     nome: "Já participou de outras comejacas ?",
  //     resposta: getValue('comejacas'),
  //     quantas: getValue('quantas')
  // },
  setValue('comejacas', inscricao.registration.questionario[0].resposta);
  setValue('quantas', inscricao.registration.questionario[0].quantas);

  setValue('alergia', inscricao.registration.questionario[1].resposta);
  setValue('quais_alergia', inscricao.registration.questionario[1].quais);

  setValue('doenca', inscricao.registration.questionario[2].resposta);
  setValue('quais_doenca', inscricao.registration.questionario[2].quais);

  setValue('medicacao', inscricao.registration.questionario[3].resposta);
  setValue('quais_medicacao', inscricao.registration.questionario[3].quais);

  setValue('vegetariano', inscricao.registration.questionario[4].resposta);
  setValue('quais_vegetariano', inscricao.registration.questionario[4].quais);

  setValue('plano_de_saude', inscricao.registration.questionario[5].resposta);
  setValue(
    'telefone_plano',
    inscricao.registration.questionario[5].telefone_plano,
  );

  setValue('tempo_instituicao', inscricao.registration.tempo_instituicao);
  setValue('instituicao_espirita', inscricao.registration.nome_instituicao);
  setValue('cep_centro', inscricao.registration.cep_instituicao);
  setValue('endereco_c', inscricao.registration.endereco_instituicao);
  setValue('cidade_c', inscricao.registration.cidade_instituicao);
  setValue('bairro_c', inscricao.registration.bairro_instituicao);
}

function updateForm(event) {
  event.preventDefault();
  const form = event.target;

  function getValue(tag) {
    try {
      return form.querySelector(`input[name=${tag}]`).value;
    } catch (error) {
      try {
        return form.querySelector(`select[name=${tag}]`).value;
      } catch (error) {
        console.log('elemento nao encontrado, tagname = ', tag);
      }
    }
  }

  const dados_pessoais = {
    nome_completo: getValue('nomecompleto'),
    nome_cracha: getValue('nome_cracha'),
    email: getValue('email'),
    data_nascimento: getValue('data_nascimento'),
    idade: getValue('idade'),
    sexo: getValue('sexo'),
    genero: getValue('genero'),
    telefone: getValue('telefone'),
    endereco: {
      cep: getValue('CEP'),
      endereco: getValue('endereco'),
      estado: getValue('estado'),
      cidade: getValue('cidade'),
      bairro: getValue('bairro'),
      numero: getValue('numero'),
    },
  };

  const questionario = [
    {
      nome: 'Já participou de outras comejacas ?',
      resposta: getValue('comejacas'),
      quantas: getValue('quantas'),
    },
    {
      nome: 'Possui algum tipo de alergia ?',
      resposta: getValue('alergia'),
      quais: getValue('quais_alergia'),
    },
    {
      nome: 'Possui alguma doença cronica? ',
      resposta: getValue('doenca'),
      quais: getValue('quais_doenca'),
    },
    {
      nome: 'Faz um rotineiro de medicação ?',
      resposta: getValue('medicacao'),
      quais: getValue('quais_medicacao'),
    },
    {
      nome: 'Faz uso de alimentação vegetarian ?',
      resposta: getValue('vegetariano'),
      quais: getValue('quais_vegetariano'),
    },
    {
      nome: 'Possui plano de saúde ?',
      resposta: getValue('plano_de_saude'),
      telefone_convenio: getValue('telefone_plano'),
    },
  ];

  const instituicao = {
    tempo_instituicao: getValue('tempo_instituicao'),
    nome: getValue('instituicao_espirita'),
    endereco: {
      cep: getValue('cep_centro'),
      endereco: getValue('endereco_c'),
      cidade: getValue('cidade_c'),
      bairro: getValue('bairro_c'),
    },
  };

  const payload = {
    dados_pessoais,
    questionario,
    instituicao,
    tipo: getValue('tipo_participacao'),
    comissao: getValue('comissao'),
    incluir_camisa: getValue('camisa'),
    tamanho_camisa: getValue('tamanho_camisa'),
  };

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  fetch(`${domain}/api/inscricoes/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(payload),
  }).then(res => {
    window.location.pathname = 'confirmacao.html';
  });
}
