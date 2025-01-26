/** 
 * MACRO:
 * -- Capturar nome do input e adicionar no array de amigos
 * -- Sortear um amigo e exibir na tela;
 */

/**
 * História 1: Adicionar amigos
 * -- Capturar nome do input e adicionar no array de amigos
 * -- Validar se o input está vazio e exibir mensagem de erro caso esteja
 * -- Limpar input após adicionar amigo
 */

/**
 * Historia 2: Exibir lista de amigos inseridos
 * -- Deverá ser exibido uma lista com os amigos inseridos
 * anteriormente abaixo do campo input (Adicionar amigos);
 */

/**
 * História 2: Sortear amigo
 * -- Sortear um amigo e exibir e exibir abaixo da lista de amigos inserida;
 * -- Validar se existe amigos para sortear;
 */

const inputAmigo = document.querySelector('#amigo');
let amigos = [];

function adicionarAmigo() {
    const nomeAmigo = inputAmigo.value;

    if (!nomeAmigo) {
        alert ('insira o nome do usuário');
        return;
    }
    
    amigos.push(nomeAmigo);
    inputAmigo.value = '';
    
    const listaAmigos = document.querySelector('#listaAmigos');
    const novoAmigo = document.createElement('li');
    novoAmigo.textContent = nomeAmigo;
    listaAmigos.appendChild(novoAmigo);
}
function sortearAmigo(){
    if (amigos.length === 0){
        alert("Nenhum amigo disponível para o sorteio");
        return;  
}
const indiceAleatorio = Math.floor(Math.random() * amigos.length);
const amigoSorteado = amigos[indiceAleatorio];

const resultado = document.getElementById('resultado');
resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;

//Remover amigo sorteado da lista
amigos.splice(indiceAleatorio, 1);

//Atualiza a lista exibida no DOM
const listaAmigos = document.querySelector("#listaAmigos");
listaAmigos.innerHTML= "";
amigos.forEach(amigo => {
    const novoAmigo = document.createElement('li');
    novoAmigo.textContent = amigo;
    listaAmigos.appendChild(novoAmigo);
});

// Verifica se todos os amigos foram sorteados
    if (amigos.length === 0) {
    alert("Todos os amigos foram sorteados. A lista será limpa.");
    resultado.innerHTML = '';
    }
}