document.addEventListener('DOMContentLoaded', function() {
    const nomeInput = document.getElementById('nomeInput');
    const addButton = document.getElementById('addButton');
    const listaAmigos = document.getElementById('listaAmigos');
    const sortearButton = document.getElementById('sortearButton');
    const resultadoSorteio = document.getElementById('resultadoSorteio');
    const limparListaButton = document.getElementById('limparListaButton');
    const sorteandoInput = document.getElementById('sorteandoInput');

    let amigos = JSON.parse(localStorage.getItem('amigos')) || [];
    let sorteiosRealizados = JSON.parse(localStorage.getItem('sorteiosRealizados')) || [];

    function adicionarAmigo() {
        const nome = nomeInput.value.trim();

        if (nome === "") {
            alert("Por favor, insira um nome válido.");
            return;
        }

        if (amigos.includes(nome)) {
            alert("Este nome já foi adicionado!");
            return;
        }

        amigos.push(nome);
        localStorage.setItem('amigos', JSON.stringify(amigos));
        nomeInput.value = "";
        atualizarListaAmigos();
    }

    function atualizarListaAmigos() {
        if (!listaAmigos) return;

        listaAmigos.innerHTML = "";
        amigos.forEach(function(amigo) {
            const li = document.createElement('li');
            li.textContent = amigo;
            listaAmigos.appendChild(li);
        });
    }

    function limparLista() {
        if (confirm("Todos os amigos serão removidos. Tem certeza que deseja limpar a lista?")) {
            amigos = [];
            sorteiosRealizados = [];
            localStorage.setItem('amigos', JSON.stringify(amigos));
            localStorage.setItem('sorteiosRealizados', JSON.stringify(sorteiosRealizados));
            atualizarListaAmigos();
            resultadoSorteio.textContent = "";
        }
    }

    function sortearAmigo() {
        const amigoSorteando = sorteandoInput.value.trim();

        if (amigoSorteando === "") {
            alert("Por favor, insira o nome de quem está sorteando.");
            return;
        }

        if (!amigos.includes(amigoSorteando)) {
            alert("É necessário estar na lista de amigos para poder sortear!");
            return;
        }

        const sorteiosAmigoSorteando = sorteiosRealizados.filter(sorteio => sorteio.amigoSorteando === amigoSorteando);
        if (sorteiosAmigoSorteando.length > 0) {
            alert("Você já realizou um sorteio!");
            return;
        }

        if (amigos.length < 3) {
            alert("Adicione pelo menos 3 amigos à lista para sortear!");
            return;
        }

        const amigosDisponiveis = amigos.filter(amigo => 
            !sorteiosRealizados.some(sorteio => sorteio.sorteado === amigo)
        );

        const amigosParaSortear = amigosDisponiveis.filter(amigo => amigo !== amigoSorteando);

        // Caso alguém seja adicionado à lista depois que todos os outros amigos já tenham sido sorteados
        if (amigosParaSortear.length === 0) {
            alert("Não há mais amigos para sortear!");
            return;
        }

        const indiceSorteado = Math.floor(Math.random() * amigosParaSortear.length);
        const amigoSecreto = amigosParaSortear[indiceSorteado];

        sorteiosRealizados.push({ amigoSorteando: amigoSorteando, sorteado: amigoSecreto });
        localStorage.setItem('sorteiosRealizados', JSON.stringify(sorteiosRealizados));

        resultadoSorteio.textContent = `O amigo secreto sorteado é: ${amigoSecreto}`;

        setTimeout(() => {
            resultadoSorteio.textContent = "";
        }, 2000);
    }

    if (addButton) {
        addButton.addEventListener('click', adicionarAmigo);
    }

    if (sortearButton) {
        sortearButton.addEventListener('click', sortearAmigo);
    }

    if (limparListaButton) {
        limparListaButton.addEventListener('click', limparLista);
    }

    atualizarListaAmigos();
});