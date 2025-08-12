let listaAmigos = [];

function adicionarTexto (tag, texto) {
    let texto = document.querySelector(tag);
    nomeTemp.innerHTMl = texto
}

function limparCampo () {
    document.getElementById("amigo").value = "";
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
    console.log(listaAmigos);
}

