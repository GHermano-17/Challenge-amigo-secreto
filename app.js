let listaAmigos = [];

function adicionarTexto (ID, texto) {
    let textoTemp = document.getElementById(ID);
    textoTemp.innerHTML = texto;
}

function limparCampo () {
    document.getElementById("amigo").value = "";
}


function modificarLista() {
    let ul = document.getElementById("listaAmigos");
    if (!ul) return;
    ul.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaAmigos[i] + (i < listaAmigos.length - 1 ? ";" : ".");
        ul.appendChild(li);
    }
}


function adicionarAmigo() {
    nome = document.getElementById("amigo").value;
    if (listaAmigos.includes(nome)) {
        alert("Este nome já está na lista.");
    } else {
        if (nome === "") {
            alert("Por favor, insira um nome.");
        } else {
            listaAmigos.push(nome);
        }
    }
    limparCampo();
    modificarLista();
    console.log(listaAmigos);
}

function sortearAmigo() {
    if (listaAmigos.length < 3) {
        alert("Adicione pelo menos três pessoas para sortear.");
        return;
    }

    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    adicionarTexto("resultado", `O amigo secreto é: ${amigoSorteado}`);
}
