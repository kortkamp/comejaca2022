'use strict';

const centros = [
    {
        "nome": "Recanto Espirita Sol de Assis",
        "endereco": "",
        "cidade": "Rio de Janeiro",
        "bairro": "",
        "cep": "",
        "telefone": ""
    },

    {
        "nome": "Casa Espirita Euripedes Barsanulfo",
        "endereco": "Rua Gazeta da Tarde, 235",
        "cidade": "Rio de Janeiro",
        "bairro": "Taquara",
        "cep": "22715-100",
        "telefone": ""
    },
    {
        "nome": "Educandário Social Lar de Frei Luiz",
        "endereco": "Estrada da Boiuna, 1367",
        "cidade": "Rio de Janeiro",
        "bairro": "Taquara",
        "cep": "22723-021",
        "telefone": ""
    },
    {
        "nome": "Centro Espirita de Jacarepagua",
        "endereco": "Av. Geremario Dantas, 655",
        "cidade": "Rio de Janeiro",
        "bairro": "Pechincha",
        "cep": "22740-011",
        "telefone": ""
    },
    {
        "nome": "Grupo de Estudos Espirita Oficina de Carita",
        "endereco": "Rua nossa senhora de Fatima, 3B",
        "cidade": "Rio de Janeiro",
        "bairro": "Jacarepagua/Colônia",
        "cep": "22713-570",
        "telefone": "(21) 980143833"
    },

    {
        "nome": "Associação Espírita Francisco de Assis",
        "endereco": "R. Cap. Bragança, 82",
        "cidade": "Rio de Janeiro",
        "bairro": "Higienópolis",
        "cep": "21050-030",
        "telefone": ""
    },

    {
        "nome": "Casa Espirita Crista Maria de Nazarerh",
        "endereco": "R. Cap. Bragança, 82",
        "cidade": "Rio de Janeiro",
        "bairro": "Higienópolis",
        "cep": "21050-030",
        "telefone": ""
    },

    {
        "nome": "Casa Espírita Sentimento",
        "endereco": "Estr. Ver. Alcel de Carvalho, 2-222",
        "cidade": "Rio de Janeiro",
        "bairro": "Vargem Grande",
        "cep": "22785-620",
        "telefone": ""
    },

    {
        "nome": "Casa Maria de Nazaré /Grupo Rita de Cássia de Estudos Espíritas",
        "endereco": "",
        "cidade": "Rio de Janeiro",
        "bairro": "",
        "cep": "",
        "telefone": ""
    },

    {
        "nome": "Centro de Educação e Orientação Espírita Jésus Gonçalves",
        "endereco": "Rua Almirante Guilhem, 265",
        "cidade": "Rio de Janeiro",
        "bairro": "Leblon",
        "cep": "22440-000",
        "telefone": ""
    },

    {

        "nome": "Centro Espírita a Caminho da Luz",
        "endereco": "R. Juruce, 164",
        "cidade": "Rio de Janeiro",
        "bairro": "Colégio",
        "cep": "21545-170",
        "telefone": ""
    },

    {

        "nome": "Centro Espírita Amor e Caridade Maria Madalena",
        "endereco": "R. Cap. Pires, 24",
        "cidade": "Rio de Janeiro",
        "bairro": "Bento Ribeiro",
        "cep": "21340-120",
        "telefone": ""
    },

    {

        "nome": "Centro Espírita Arautos de Uma Nova Era",
        "endereco": "Estr. do Portela, 347",
        "cidade": "Rio de Janeiro",
        "bairro": "Madureira",
        "cep": "21351-050",
        "telefone": ""
    },

    {

        "nome": "Centro Espirita Caminhemos Com humildade",
        "endereco": "R. Comendador Rodrigues Alves, 1544",
        "cidade": "Rio de Janeiro",
        "bairro": "Nilópolis",
        "cep": "26540-010",
        "telefone": ""
    },

    {
        "nome": "Centro Espirita Caridade Aymoré",
        "endereco": "R. Marambaia, 83",
        "cidade": "Rio de Janeiro",
        "bairro": "Irajá",
        "cep": "21361-290",
        "telefone": ""
    },

    {
        "nome": "Centro Espírita Casa do Caminho",
        "endereco": "Estr. do Cafundá, 3045",
        "cidade": "Rio de Janeiro",
        "bairro": "Taquara",
        "cep": "",
        "telefone": " (21) 2456-6604"
    },

    {
        "nome": "Centro Espírita Discípulos de Jesus",
        "endereco": "R. Amaral Costa, 52",
        "cidade": "Rio de Janeiro",
        "bairro": " Campo Grande",
        "cep": "23050-260",
        "telefone": "(21) 3597-0040"
    },

    {
        "nome": "Centro Espírita Filhos de Deus",
        "endereco": "R. Dr. Ernâni Agrícola 141-279 ",
        "cidade": "Rio de Janeiro",
        "bairro": "Tanque",
        "cep": "",
        "telefone": "(21) 2423-3099"
    },

    {
        "nome": "Centro Espírita Francisco de Assis",
        "endereco": "Recreio dos Bandeirantes",
        "cidade": "Rio de Janeiro",
        "bairro": "Recreio",
        "cep": "22783-116",
        "telefone": "(21) 3190-4358"
    },

    {
        "nome": "Grupo Espírita Amor e Luz de  Maria Madalena",
        "endereco": "R. dos Diamantes, 1497",
        "cidade": "Rio de Janeiro",
        "bairro": "Rocha Miranda",
        "cep": "21510-004",
        "telefone": "(21) 3373-0079"
    },

    {
        "nome": "Grupo Espírita de Evangelização",
        "endereco": " Rua Jubaí, 107",
        "cidade": "Rio de Janeiro",
        "bairro": "Bento Ribeiro",
        "cep": "21331-030",
        "telefone": ""
    },

    {
        "nome": "Grupo Espírita Estrela dos Navegantes",
        "endereco": "Rua Luiz Beltrão, 1498",
        "cidade": "Rio de Janeiro",
        "bairro": "Vila Valqueire",
        "cep": " 21321-234",
        "telefone": ""
    },

    {
        "nome": "GRUPO ESPÍRITA IRMÃOS SAMARITANOS",
        "endereco": "Rua Maruja, 348",
        "cidade": "Rio de Janeiro",
        "bairro": "Gardênia Azul",
        "cep": " 22765-570",
        "telefone": "(21) 3827-0751"
    },

    {
        "nome": "GRUPO ESPÍRITA PRINCIPIANTES DE BOA VONTADE",
        "endereco": "R. Araçá, 105",
        "cidade": "Rio de Janeiro",
        "bairro": "Ricardo de Albuquerque",
        "cep": "21620-050",
        "telefone": "(21) 3738-2234"
    },

    {
        "nome": "Núcleo de Estudos Espíritas Chico Xavier",
        "endereco": "R. Batista Caetano, 44",
        "cidade": "Rio de Janeiro",
        "bairro": "Anil",
        "cep": "22755-120",
        "telefone": ""
    },

    {
        "nome": "Núcleo Espírita Pedro e Paulo",
        "endereco": "R. Cap. Machado, 531",
        "cidade": "Rio de Janeiro",
        "bairro": "Praça Seca",
        "cep": "21320-030",
        "telefone": "(21) 3390-4621"
    },

    {
        "nome": "União Espírita José O Carpinteiro",
        "endereco": "R. Macembu, 1571",
        "cidade": "Rio de Janeiro",
        "bairro": "Taquara",
        "cep": "22710-241",
        "telefone": "(21) 2427-3324"
    }
]


const datalist = document.getElementById('datalist');

centros.forEach(centro => {
    const tag = document.createElement('option')
    tag.appendChild(document.createTextNode(centro.nome))
    tag.setAttribute('value', centro.nome)
    datalist.appendChild(tag)
})

document.getElementById('nome_instituicao').addEventListener('change', (event) => {
    const centroSelecionado = event.target.value
    const centro = centros.filter(centro => centro.nome === centroSelecionado)[0]

    if (centro) {
        document.getElementById('endereco_instituicao').value = centro.endereco
        document.getElementById('bairro_instituicao').value = centro.bairro
        document.getElementById('cidade_instituicao').value = centro.cidade
        document.getElementById('cep_instituicao').value = centro.cep
    }
})


/* 
for (let i = 0; i < centros.length; i++) {
    // Popular SELECT com JSON.
    datalist.innerHTML = datalist.innerHTML +
    '<option value="' + centros[i]['nome'] + '">' + centros[i]['nome'] + '</option>';
} */

