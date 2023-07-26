const form = document.getElementById('form-atividade')
const contato = [];
const numero = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionandolinha();
    atualizaTabela();
});

function adicionandolinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    const nome = inputNomeContato.value;
    const numeroContato = parseFloat(inputNumeroContato.value.replace(/\D/g, ''));

    if (contato.includes(nome) && numero.includes(numeroContato)){
        alert(`O nome: ${nome} e o numero: ${numeroContato} já foram inseridos!`);
    } else if (contato.includes(nome)) {
        alert (`O nome: ${nome} ja foi inserido(a)`);
    } else if (numero.includes(numeroContato)) {
        alert (`O numero: ${numeroContato} ja foi inserido`);
    } else {
        contato.push(nome);
        numero.push(numeroContato);

        let linha = '<tr>';
        linha += `<td>${nome}</td>`;
        linha += `<td>${numeroContato}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

