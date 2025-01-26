 <h1 style="text-align: center;">
 <img src="https://ik.imagekit.io/6kfiz1jrz/Captura%20de%20tela%20de%202025-01-26%2019-35-16.png?updatedAt=1737931264220" alt="Amigo Secreto" />
</h1>

# Projeto Amigo Secreto 🎉

Este projeto faz parte do programa **ONE (Oracle Next Education)**, uma iniciativa da Oracle em parceria com a Alura. O objetivo é desenvolver uma aplicação web interativa para realizar sorteios de amigo secreto.

## Funcionalidades ✨

- **Adicionar Amigos**: Permite adicionar nomes de amigos a uma lista.
- **Sortear Amigo Secreto**: Realiza o sorteio de um amigo secreto de forma aleatória e exibe o resultado.
- **Atualização Dinâmica**: Atualiza a lista de amigos após cada sorteio e limpa a lista quando todos os amigos forem sorteados.

## Tecnologias Utilizadas 🛠️

- **HTML**: Estrutura da página web.
- **CSS**: Estilização e layout da interface do usuário.
- **JavaScript**: Lógica de adição de amigos, sorteio e atualização dinâmica da lista.

## Como Funciona

### Adicionar Nome na Lista

```javascript
const inputAmigo = document.querySelector("#amigo");
let amigos = [];

function adicionarAmigo() {
  const nomeAmigo = inputAmigo.value;

  if (!nomeAmigo) {
    alert("insira o nome do usuário");
    return;
  }

  amigos.push(nomeAmigo);
  inputAmigo.value = "";

  const listaAmigos = document.querySelector("#listaAmigos");
  const novoAmigo = document.createElement("li");
  novoAmigo.textContent = nomeAmigo;
  listaAmigos.appendChild(novoAmigo);
}
```

### Sortear Amigo Secreto

```javascript
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Nenhum amigo disponível para o sorteio");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;

  // Remove o amigo sorteado da lista
  amigos.splice(indiceAleatorio, 1);

  // Atualiza a lista exibida no DOM
  const listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";
  amigos.forEach((amigo) => {
    const novoAmigo = document.createElement("li");
    novoAmigo.textContent = amigo;
    listaAmigos.appendChild(novoAmigo);
  });

  // Verifica se todos os amigos foram sorteados
  if (amigos.length === 0) {
    alert("Todos os amigos foram sorteados. A lista será limpa.");
    resultado.innerHTML = "";
  }
}
```

### Estrutura do Projeto 📁

O projeto está organizado da seguinte forma:

- **index.html**: Contém a estrutura da página web.

- **styles.css**: Contém os estilos e layout da interface do usuário.
- **app.js**: Contém a lógica de adição de amigos, sorteio e atualização da lista.

Projeto desenvolvido como parte do programa **ONE (Oracle Next Education)** em parceria com a **Alura**.
