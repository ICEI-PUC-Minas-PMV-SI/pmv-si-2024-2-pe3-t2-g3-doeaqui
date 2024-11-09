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
  
    const cData = [
      {
        nomeCampanha: nome,
        tipoCampanha: tipo,
        enderecoCampanha: endereco,
        contatoCampanha: contato,
        descricaoCampanha: descricao,
        isTemporario: temporario,
        inicioCampanha: dataInicio,
        fimCampanha: dataFim,
      },
      { usuarioLogado: retrieveLogged() },
    ];
    cStore(cData);
    console.log(cData);
  }
  
  formNovaCampanha.addEventListener("submit", salvarCampanhaNoLocalStorage);
  