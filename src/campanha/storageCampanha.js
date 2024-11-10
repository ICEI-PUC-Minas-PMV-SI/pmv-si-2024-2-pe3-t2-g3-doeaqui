const formNovaCampanha = document.querySelector("#modal-nova-campanha form");


function cmessager() {
  alert("Campanha Cadastrada");
}
function errorCMessager() {
  alert("Nome de campanha já existente");
}


function cStore(c) {
  const campanhas = StorageData.getCampanhas();
    if (campanhas.find((item) => item.nomeCampanha === c.nomeCampanha)) {
      errorCMessager();
    } else {
      StorageData.setCampanhas(c);
      cmessager();
    }

}
function cExclude(c) {
  StorageData.removeCampanhas(c);
}
