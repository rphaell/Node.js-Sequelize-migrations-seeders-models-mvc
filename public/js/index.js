// Verificar se o email foi preenchido

const verificaCampoPreenchido = (evento)=> {

    console.log(evento.target);


    if(inputEmail.value == ""){
        evento.target.style.outline = "1px solid red";
        evento.target.setAttribute('placeholder', `Preencha o campo ${evento.target.name}!`);
    } else {
        evento.target.style.outline = "1px solid blue";
        
    }
}

const onFileChange = evento => {
    let img = document.getElementById('output');
    img.src = URL.createObjectURL(evento.target.files[0]);

}

// 1 - Capturar o elemmento input do email
let inputEmail = document.getElementById('email');
let inputSenha = document.getElementById('senha');
let inputConfirmacao = document.getElementById('confirmacao');
let inputFile = document.getElementById('foto');

// 2- associoar ao evento "perdeu o foco" uma função
// 3- avisar ao usuario que o campo de e-mail foi deixado em branco

inputEmail.addEventListener('blur', verificaCampoPreenchido);
inputSenha.addEventListener('blur', verificaCampoPreenchido);
inputConfirmacao.addEventListener('blur', verificaCampoPreenchido);
inputFile.addEventListener('change', onFileChange);



























// Criando um array de amigos
let amigos = [
    {
        id: 1,
        nome: "Wendel Cutrim",
        email: "wendel@digitalhouse.com",
        foto: `http://lorempixel.com.br/500/500/?1`
    },
    {
        id: 2,
        nome: "Sérgio Moura",
        email: "ssiqueira@digitalhouse.com",
        foto: `http://lorempixel.com.br/500/500/?2`
    },
    {
        id: 3,
        nome: "Silvia Fiacador",
        email: "silvia@digitalhouse.com",
        foto: `http://lorempixel.com.br/500/500/?3`
    }
]

// Localizar/carregar elementos do HTML aqui para o mundo JS
// Exemplo: Carregar elemento que mostra lista de amigos
let listaDeAmigos = document.getElementById("listaDeAmigos");

// 1 - Criar uma string com a estrutura html que exibe um usuário
let string = '';
for (let i = 0; i < amigos.length; i++) {
    const amigo = amigos[i];
    string += `
    <article onclick="alert('Clicou em ${amigo.nome}')">
        <img src="${amigo.foto}" alt="Foto de ${amigo.nome}">
        <span>${amigo.nome}</span>
        <a href="mailto:${amigo.email}">${amigo.email}</a>
    </article>
    `
}

// 2 - Injetar essa string no elemento listaDeAmigos
listaDeAmigos.innerHTML = string;


