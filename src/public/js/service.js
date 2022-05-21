'use strict'

// const domain = "https://www.comejaca.org.br"
const domain = "http://localhost:3003"

// POST

function submitForm(event) {
    event.preventDefault()
    const form = event.target

    function getValue(tag) {
        try {
            return form.querySelector(`input[name=${tag}]`).value
        } catch (error) {
            try {
                return form.querySelector(`select[name=${tag}]`).value
            } catch (error) {
                console.log('elemento nao encontrado, tagname = ', tag)
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
        gfe: "1",
        incluir_camisa: getValue('incluir_camisa'),
        tamanho_camisa: getValue('tamanho_camisa'),
        tempo_instituicao: getValue('tempo_instituicao'),
        nome_instituicao: getValue('nome_instituicao'),
        endereco_instituicao: getValue('endereco_instituicao'),
        cep_instituicao: getValue('cep_instituicao'),
        cidade_instituicao: getValue('cidade_instituicao'),
        bairro_instituicao: getValue('bairro_instituicao'),
        telefone_instituicao: getValue('telefone_instituicao'),

        questionario: [
            {
                nome: "Já participou de outras comejacas ?",
                resposta: getValue('comejacas'),
                quantas: getValue('quantas')
            },
            {
                nome: "Possui algum tipo de alergia ?",
                resposta: getValue('alergia'),
                quais: getValue('quais_alergia')
            },
            {
                nome: "Possui alguma doença cronica? ",
                resposta: getValue('doenca'),
                quais: getValue('quais_doenca')
            },
            {
                nome: "Faz um rotineiro de medicação ?",
                resposta: getValue('medicacao'),
                quais: getValue('quais_medicacao')
            },
            {
                nome: "Faz uso de alimentação vegetarian ?",
                resposta: getValue('vegetariano'),
                quais: getValue('quais_vegetariano')
            },
            {
                nome: "Possui plano de saúde ?",
                resposta: getValue('plano_de_saude'),
                telefone_convenio: getValue('telefone_plano')
            }
        ],




    }



    const payload = inscricao
    console.log(inscricao)
    fetch(`${domain}/api/registrations/`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(payload)
    }).then(res => {
        console.log('funcionou')
        window.location.pathname = 'confirmacao.html'
    })
}


// GET

function submitForm(event) {
    event.preventDefault()
    const form = event.target

    function getValue(tag) {
        try {
            return form.querySelector(`input[name=${tag}]`).value
        } catch (error) {
            try {
                return form.querySelector(`select[name=${tag}]`).value
            } catch (error) {
                console.log('elemento nao encontrado, tagname = ', tag)
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


        questionario: [
            {
                nome: "Já participou de outras comejacas ?",
                resposta: getValue('comejacas'),
                quantas: getValue('quantas')
            },
            {
                nome: "Possui algum tipo de alergia ?",
                resposta: getValue('alergia'),
                quais: getValue('quais_alergia')
            },
            {
                nome: "Possui alguma doença cronica? ",
                resposta: getValue('doenca'),
                quais: getValue('quais_doenca')
            },
            {
                nome: "Faz um rotineiro de medicação ?",
                resposta: getValue('medicacao'),
                quais: getValue('quais_medicacao')
            },
            {
                nome: "Faz uso de alimentação vegetarian ?",
                resposta: getValue('vegetariano'),
                quais: getValue('quais_vegetariano')
            },
            {
                nome: "Possui plano de saúde ?",
                resposta: getValue('plano_de_saude'),
                telefone_convenio: getValue('telefone_plano')
            }
        ],

        tipo: getValue('tipo_participacao'),
        comissao: getValue('comissao'),
        incluir_camisa: getValue('incluir_camisa'),
        tamanho_camisa: getValue('tamanho_camisa'),


        tempo_instituicao: getValue('tempo_instituicao'),
        nome_instituicao: getValue('nome_instituicao'),
        endereco_instituicao: getValue('endereco_instituicao'),
        cep_instituicao: getValue('cep_instituicao'),

        cidade_instituicao: getValue('cidade_instituicao'),
        bairro_instituicao: getValue('bairro_instituicao'),
        telefone_instituicao: getValue('telefone_instituicao'),


    }
    console.log(inscricao)
    const payload = {
        inscricao

    }

    fetch(`${domain}/api/registrations/`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(payload)
    }).then(res => {
        window.location.pathname = 'confirmacao_inscricao.html'
    })
} 
async function fillForm() {

   


    function setValue(tag, value) {
        try {
            document.querySelector(`input[name=${tag}]`).value = value
        } catch (error) {
            try {
                document.querySelector(`select[name=${tag}]`).value = value
            } catch (error) {
                console.log('elemento nao encontrado, tagname = ', tag)
            }
        }
    }

    const params = new URLSearchParams(window.location.search)
    const id = params.get('id')

    const res = await fetch(`${domain}/api/inscricoes/${id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "GET",
    })

    const inscricao = JSON.parse(await res.text())

    setValue('nomecompleto', nome_completo)
    setValue('nome_cracha', nome_cracha)
    setValue('email', email)
    setValue('data_nascimento', data_nascimento)
    setValue('idade', idade)
    setValue('sexo', sexo)
    setValue('genero', genero)
    setValue('telefone', telefone)

    setValue('CEP', cep)
    setValue('endereco', endereco)
    setValue('estado', estado)
    setValue('cidade', cidade)
    setValue('bairro', bairro)
    setValue('numero', numero)

    setValue('tipo_participacao', tipo)
    setValue('comissao', incluir_camisa)
    setValue('camisa', incluir_camisa)
    setValue('tamanho_camisa', tamanho_camisa)


    // {
    //     nome: "Já participou de outras comejacas ?",
    //     resposta: getValue('comejacas'),
    //     quantas: getValue('quantas')
    // },
    setValue('comejacas', inscricao.questionario[0].resposta)
    setValue('quantas', inscricao.questionario[0].quantas)



    setValue('alergia', inscricao.questionario[1].resposta)
    setValue('quais_alergia', inscricao.questionario[1].quais)

    setValue('doenca', inscricao.questionario[2].resposta)
    setValue('quais_doenca', inscricao.questionario[2].quais)

    setValue('medicacao', inscricao.questionario[3].resposta)
    setValue('quais_medicacao', inscricao.questionario[3].quais)

    setValue('vegetariano', inscricao.questionario[4].resposta)
    setValue('quais_vegetariano', inscricao.questionario[4].quais)

    setValue('plano_de_saude', inscricao.questionario[5].resposta)
    setValue('telefone_plano', inscricao.questionario[5].telefone_plano)

    setValue('tempo_instituicao', inscricao.instituicao.tempo_instituicao)
    setValue('instituicao_espirita', inscricao.instituicao.nome)
    setValue('cep_centro', inscricao.instituicao.endereco.cep)
    setValue('endereco_c', inscricao.instituicao.endereco.endereco)
    setValue('cidade_c', inscricao.instituicao.endereco.cidade)
    setValue('bairro_c', inscricao.instituicao.endereco.bairro)


}


function updateForm(event) {
    event.preventDefault()
    const form = event.target

    function getValue(tag) {
        try {
            return form.querySelector(`input[name=${tag}]`).value
        } catch (error) {
            try {
                return form.querySelector(`select[name=${tag}]`).value
            } catch (error) {
                console.log('elemento nao encontrado, tagname = ', tag)
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
            numero: getValue('numero')
        }
    }

    const questionario = [
        {
            nome: "Já participou de outras comejacas ?",
            resposta: getValue('comejacas'),
            quantas: getValue('quantas')
        },
        {
            nome: "Possui algum tipo de alergia ?",
            resposta: getValue('alergia'),
            quais: getValue('quais_alergia')
        },
        {
            nome: "Possui alguma doença cronica? ",
            resposta: getValue('doenca'),
            quais: getValue('quais_doenca')
        },
        {
            nome: "Faz um rotineiro de medicação ?",
            resposta: getValue('medicacao'),
            quais: getValue('quais_medicacao')
        },
        {
            nome: "Faz uso de alimentação vegetarian ?",
            resposta: getValue('vegetariano'),
            quais: getValue('quais_vegetariano')
        },
        {
            nome: "Possui plano de saúde ?",
            resposta: getValue('plano_de_saude'),
            telefone_convenio: getValue('telefone_plano')
        }
    ]

    const instituicao = {
        tempo_instituicao: getValue('tempo_instituicao'),
        nome: getValue('instituicao_espirita'),
        endereco: {
            cep: getValue('cep_centro'),
            endereco: getValue('endereco_c'),
            cidade: getValue('cidade_c'),
            bairro: getValue('bairro_c'),
        }
    }

    const payload = {
        dados_pessoais,
        questionario,
        instituicao,
        tipo: getValue('tipo_participacao'),
        comissao: getValue('comissao'),
        incluir_camisa: getValue('camisa'),
        tamanho_camisa: getValue('tamanho_camisa'),
    }

    const params = new URLSearchParams(window.location.search)
    const id = params.get('id')

    fetch(`${domain}/api/inscricoes/${id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify(payload)
    }).then(res => {
        window.location.pathname = 'confirmacao.html'
    })
}







