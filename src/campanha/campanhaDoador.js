document.addEventListener("DOMContentLoaded", () => {
  const dataFromStorage = StorageData.getCampanhas();
  const loggedUser = StorageData.getLogged();
  console.log(dataFromStorage + "This is the data from the storage");
  dataFromStorage.forEach((data) => console.log(data));

  let campanhas = [];
  let filteredCampanhas = [];
  let campanhaSelecionada;

  const listaCampanhas = document.getElementById("lista-campanhas");
  const detalhesCampanha = document.getElementById("detalhes-campanha");
  const modalEdit = document.getElementById("modal-editar");
  const formEditsubmitter = modalEdit.querySelector("button[type='submit']");

  document.querySelector("#delBtn")?.addEventListener("click", deletarCampanha);
  document.querySelector("#editBtn")?.addEventListener("click", editarCampanha);
  document
    .getElementById("pesquisar-campanha")
    ?.addEventListener("input", filterCampanhas);

  if (loggedUser?.tipoUsuario === "PF") {
    document.querySelector("#open-modal-btn").style.display = "none";
    document.querySelector("#editBtn").style.display = "none";
    document.querySelector("#delBtn").style.display = "none";
  }

  function retornarCampanhas() {
    if (loggedUser?.tipoUsuario === "PJ")
      filteredCampanhas = campanhas = dataFromStorage.filter(
        (data) => data.usuario.id === loggedUser.id
      );
    else filteredCampanhas = campanhas = dataFromStorage;
    renderizarCampanhas(campanhas);
  }

  function renderizarCampanhas() {
    listaCampanhas.innerHTML = "";
    filteredCampanhas.forEach((campanha) => {
      const campanhaElement = document.createElement("div");
      campanhaElement.classList.add("campanha-item");
      campanhaElement.textContent = `${campanha.nomeCampanha}`;
      campanhaElement.addEventListener("click", () => {
        selecionarCampanha(campanha);
        campanhaSelecionada = campanha;
      });
      listaCampanhas.appendChild(campanhaElement);
    });
  }

  function selecionarCampanha(campanha) {
    detalhesCampanha.innerHTML = `
                  <div class="campanha-title">
                      <h3>${campanha.nomeCampanha}</h3>
                  </div>
                  <div class="datas">
                      <div><b> Data de Inicio:</b> ${campanha.inicioCampanha}</div>
                      <div> <b> Data de Fim:</b> ${campanha.fimCampanha}</div>
                  </div>
                  <div class="doacoes">
                      <b>Doações coletadas:</b>
                      <div>                    
                          <span>${campanha.tipoCampanha}</span>
                      </div>
                  </div>
                  <b>Descrição Doações:</b>      
                  <p>${campanha.descricaoCampanha}</p> 
                  <b>Endereço da instuição:</b>          
                  <div class="pontosDeColeta">
                      <span>${campanha.enderecoCampanha}</span> 
                  </div>
          `;
    document.querySelectorAll(".campanha-item").forEach((item) => {
      item.classList.remove("active");
    });
    event.target.classList.add("active");
    return campanha;
  }

  function editarCampanha() {
    let newCampanhaFields = {
      name: document.getElementById("nomeEditar"),
      type: document.getElementById("tipoEditar"),
      addr: document.getElementById("enderecoEditar"),
      contact: document.getElementById("contatoEditar"),
      desc: document.getElementById("descricaoEditar"),
      temp: document.querySelector("input[name='temporarioEditar']"),
      begin: document.getElementById("data-inicioEditar"),
      end: document.getElementById("data-fimEditar"),
    };
    /*Verificação para saber se tem alguma campanha selecionada adicionada*\  */
    if (campanhaSelecionada === undefined) {
      closeEditModal();
      return alert(
        "Não há nenhuma campanha selecionada. Por favor selecione uma campanha"
      );
    }

    newCampanhaFields.name.value = campanhaSelecionada.nomeCampanha;
    newCampanhaFields.type.value = campanhaSelecionada.tipoCampanha;
    newCampanhaFields.addr.value = campanhaSelecionada.enderecoCampanha;
    newCampanhaFields.contact.value = campanhaSelecionada.contatoCampanha;
    newCampanhaFields.desc.value = campanhaSelecionada.descricaoCampanha;
    newCampanhaFields.temp.checked = campanhaSelecionada.isTemporario;
    newCampanhaFields.begin.value = campanhaSelecionada.inicioCampanha;
    newCampanhaFields.end.value = campanhaSelecionada.fimCampanha;

    formEditsubmitter.addEventListener("click", () => {
      /*Correção do erro de não mostrar as campanhas editadas: Adição do objeto usuário à modal para a definição correta dos valores*\ */
      const newData = {
        nomeCampanha: newCampanhaFields.name.value,
        tipoCampanha: newCampanhaFields.type.value,
        enderecoCampanha: newCampanhaFields.addr.value,
        contatoCampanha: newCampanhaFields.contact.value,
        descricaoCampanha: newCampanhaFields.desc.value,
        isTemporario: newCampanhaFields.temp.value,
        inicioCampanha: newCampanhaFields.begin.value,
        fimCampanha: newCampanhaFields.end.value,
        usuario: loggedUser,
      };
      StorageData.editCampanha(campanhaSelecionada.id, newData);
      retornarCampanhas();
      document.getElementById("modal-editar").classList.remove("show");
    });
  }

  function deletarCampanha() {
    cExclude(campanhaSelecionada.id);
  }

  function filterCampanhas(e) {
    const termoPesquisa = e.target.value.toLowerCase();
    filteredCampanhas = campanhas.filter((campanha) =>
      campanha.nomeCampanha?.toLowerCase()?.includes(termoPesquisa)
    );
    renderizarCampanhas();
  }

  retornarCampanhas();
});
