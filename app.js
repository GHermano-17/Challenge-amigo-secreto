let listaAmigos = [];

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
    console.log(listaAmigos);
}

