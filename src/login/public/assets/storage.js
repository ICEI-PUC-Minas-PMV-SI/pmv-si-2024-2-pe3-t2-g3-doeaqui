const usuario = [
  {
    email: "Example",
    contato: "Example",
    cpf: "Example",
    cnpj: "Example",
    endereco: "Example",
    senha: "Example",
    tipoUsuario: "Example",
  },
  { isLoggedIn: false },
];

function messager() {
  alert("Usuario Cadastrado");
}
function errorMessager() {
  alert("Usuario existente");
}

const model = JSON.parse(localStorage.getItem("usuarios"));

const stringified = JSON.stringify(usuario);

if (!localStorage.getItem("usuarios")) {
  localStorage.setItem("usuarios", stringified);
}
function pusher(param) {
  if (model instanceof Array) {
    if (
      model.find(
        (user) => user.cpf === param[0].cpf || user.cnpj === param[0].cnpj
      )
    ) {
      errorMessager();
      console.log("Existing data found");
      return;
    } else {
      model.push(param);
      const strModel = JSON.stringify(model);
      localStorage.setItem("usuarios", strModel);
      messager();
      return;
    }
  }
}
function store(data) {
  console.log("Chamada para o banco de dados");
  pusher(data);
}
