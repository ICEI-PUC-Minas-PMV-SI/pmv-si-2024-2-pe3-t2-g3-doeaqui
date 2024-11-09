const formNovaCampanha = document.querySelector("#modal-nova-campanha form");

//Storage
const campanha = [
  {
    nomeCampanha: "Example",
    tipoCampanha: "Example",
    enderecoCampanha: "Example",
    contatoCampanha: "Example",
    descricaoCampanha: "Example",
    isTemporario: false,
    inicioCampanha: "Random",
    fimCampanha: "Random",
  },
  { usuarioLogado: "" },
];

function cmessager() {
  alert("Campanha Cadastrada");
}
function errorCMessager() {
  alert("Nome de campanha já existente");
}

const cmodel = JSON.parse(localStorage.getItem("campanhas"));

const stringified = JSON.stringify(campanha);

if (!localStorage.getItem("campanhas")) {
  localStorage.setItem("campanhas", stringified);
}
function cPusher(c) {
  if (cmodel instanceof Array) {
    if (cmodel.find((item) => item.nomeCampanha === c[0].nomeCampanha)) {
      errorCMessager();
      console.log("Existing data found");
      return;
    } else {
      cmodel.push(c);
      const strCModel = JSON.stringify(cmodel);
      localStorage.setItem("campanhas", strCModel);
      cmessager();
      return;
    }
  }
}
function cDeleter(c) {
  if (cmodel instanceof Array) {
    const index = cmodel.findIndex(
      (item) => item.nomeCampanha === c.nomeCampanha
    );
    if (index > -1) {
      cmodel.splice(index, 1);
      localStorage.setItem("campanhas", JSON.stringify(cmodel));
    } else {
      console.log("Data Not Found");
    }
  } else {
    console.log("cmodel is not an array");
  }
}

function cStore(data) {
  cPusher(data);
}
function cExclude(data) {
  cDeleter(data);
}
function retrieveLogged() {
  const users = JSON.parse(localStorage.getItem("usuarios"));
  if (users instanceof Array) {
    const mappedKeys = users.filter((_, key) => key >= 2);
    const rightUser = mappedKeys.filter(
      (value) => value[1].isLoggedIn === true
    );
    const data = rightUser.map((value) => value[0]);
    const shiftedData = JSON.stringify(data);
    console.log(shiftedData);
    return shiftedData;
  }
}
retrieveLogged();
//
