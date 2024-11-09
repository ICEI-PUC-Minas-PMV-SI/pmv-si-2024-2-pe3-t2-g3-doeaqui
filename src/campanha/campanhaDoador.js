document.addEventListener("DOMContentLoaded", () => {
    /*
    const campanhas = [
      {
        id: 1,
        nome: "Campanha 1",
        descricao:
          "Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1Descrição da Campanha 1",
        doacoes: ["roupa", "comida"],
        dtInicio: "01/01/2025",
        dtFim: "01/01/2025",
        pontosDeColeta: ["ponto1", "ponto2", "ponto3"],
      },
      {
        id: 2,
        nome: "Campanha 2",
        descricao: "Descrição da Campanha 2",
        doacoes: ["brinquedos", "livros"],
        dtInicio: "01/02/2025",
        dtFim: "01/03/2025",
        pontosDeColeta: ["ponto4", "ponto5"],
      },
      {
        id: 3,
        nome: "Campanha 3",
        descricao: "Descrição da Campanha 3",
        doacoes: ["alimentos não perecíveis", "água"],
        dtInicio: "15/01/2025",
        dtFim: "15/02/2025",
        pontosDeColeta: ["ponto6", "ponto7", "ponto8", "ponto9"],
      },
      {
        id: 4,
        nome: "Campanha 4",
        descricao: "Descrição da Campanha 4",
        doacoes: ["material escolar"],
        dtInicio: "01/03/2025",
        dtFim: "01/04/2025",
        pontosDeColeta: ["ponto10", "ponto11"],
      },
      {
        id: 5,
        nome: "Campanha 5",
        descricao: "Descrição da Campanha 5",
        doacoes: ["calçados", "roupa"],
        dtInicio: "10/02/2025",
        dtFim: "10/03/2025",
        pontosDeColeta: ["ponto12", "ponto13", "ponto14"],
      },
    ];
  */
    const modalEdit = document.getElementById("modal-editar");
    const fields = modalEdit.querySelectorAll("input");
    const campanhas = JSON.parse(localStorage.getItem("campanhas"));
  
    function retornarCampanhas() {
      if (campanhas instanceof Array) {
        const mapped = campanhas.filter((_, key) => key >= 2);
        const result = mapped.map((value) => value[0]);
        return result;
      }
    }
    retornarCampanhas();
  
    const listaCampanhas = document.getElementById("lista-campanhas");
    const detalhesCampanha = document.getElementById("detalhes-campanha");
    const pesquisarCampanha = document.getElementById("pesquisar-campanha");
  
    function renderizarCampanhas(campanhasFiltradas) {
      listaCampanhas.innerHTML = "";
      campanhasFiltradas.forEach((campanha) => {
        if (campanha instanceof Array) {
          console.log(campanha);
          const filteredCampanha = campanha.filter((_, key) => key < 1);
          const { nomeCampanha } = filteredCampanha[0];
          const campanhaElement = document.createElement("div");
          campanhaElement.classList.add("campanha-item");
          campanhaElement.textContent = `${nomeCampanha}`;
          campanhaElement.addEventListener("click", () => {
            const select = selecionarCampanha(filteredCampanha[0]);
            const edit = editarCampanha(filteredCampanha[0]);
            const exclude = deletarCampanha(filteredCampanha[0]);
            console.log(select);
            console.log(edit);
            console.log(exclude);
          });
          listaCampanhas.appendChild(campanhaElement);
        }
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
                          <span class="badge-doacao">Doacoes Aqui</span>
                      </div>
                  </div>
                  <div class="campanha-descricao">                
                      <p>${campanha.descricaoCampanha}</p>
                  </div>
                  <div class="pontosDeColeta">
                      <span class="badge-ptDoacao">PontoDoacao</span> 
                      
                  </div>
          `;
      document.querySelectorAll(".campanha-item").forEach((item) => {
        item.classList.remove("active");
      });
      event.target.classList.add("active");
      return campanha;
    }
    function editarCampanha(campanha) {
      const editModal = document.getElementById("modal-editar");
      const submitter = editModal.querySelector("button[type='submit']");
  
      let name = (document.getElementById("nomeEditar").value =
        campanha.nomeCampanha);
      let type = (document.getElementById("tipoEditar").value =
        campanha.tipoCampanha);
      let addr = (document.getElementById("enderecoEditar").value =
        campanha.enderecoCampanha);
      let contact = (document.getElementById("contatoEditar").value =
        campanha.contatoCampanha);
      let desc = (document.getElementById("descricaoEditar").value =
        campanha.descricaoCampanha);
      let temp = (document.querySelector(
        "input[name='temporarioEditar']"
      ).checked = campanha.isTemporario);
      let begin = (document.getElementById("data-inicioEditar").value =
        campanha.inicioCampanha);
      let end = document.getElementById("data-fimEditar").fimCampanha;
  
      submitter.addEventListener("click", () => {
        const newData = [
          {
            nomeCampanha: name,
            tipoCampanha: type,
            enderecoCampanha: addr,
            contatoCampanha: contact,
            descricaoCampanha: desc,
            isTemporario: temp,
            inicioCampanha: begin,
            fimCampanha: end,
          },
          { usuarioLogado: retrieveLogged() },
        ];
        cStore(newData);
      });
    }
    function deletarCampanha(campanha) {
      const delBtn = document.getElementById("delBtn");
      delBtn.addEventListener("click", () => {
        cExclude(campanha);
      });
    }
  
    pesquisarCampanha.addEventListener("input", (e) => {
      const termoPesquisa = e.target.value.toLowerCase();
      const campanhasFiltradas = campanhas.filter((campanha) =>
        campanha.nome.toLowerCase().includes(termoPesquisa)
      );
      renderizarCampanhas(campanhasFiltradas);
    });
    renderizarCampanhas(campanhas);
  });
  