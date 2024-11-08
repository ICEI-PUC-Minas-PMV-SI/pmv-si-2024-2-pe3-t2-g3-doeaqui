const usuarioLogado = localStorage.getItem("usuarios")

const formNovaCampanha = document.querySelector("#modal-nova-campanha form");

function salvarCampanhaNoLocalStorage(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const tipo = document.getElementById("tipo").value;
    const endereco = document.getElementById("endereco").value;
    const contato = document.getElementById("contato").value;
    const descricao = document.getElementById("descricao").value;
    const temporario = document.querySelector("input[name='temporario']").checked;
    const dataInicio = document.getElementById("data-inicio").value;
    const dataFim = document.getElementById("data-fim").value;

    const campanha = {
        nome,
        tipo,
        endereco,
        contato,
        descricao,
        temporario,
        dataInicio,
        dataFim
    };

    let campanhas = JSON.parse(localStorage.getItem("campanhas")) || [];
    campanhas.push(campanha);
    localStorage.setItem("campanhas", JSON.stringify(campanhas));

    closeModal();
    alert("Campanha salva com sucesso!");

    formNovaCampanha.reset();
}

formNovaCampanha.addEventListener("submit", salvarCampanhaNoLocalStorage);
