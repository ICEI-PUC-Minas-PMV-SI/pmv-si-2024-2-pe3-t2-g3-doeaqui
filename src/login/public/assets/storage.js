//Script do localStorage 
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
    model.push(param);
  }
  
  function store(data) {
    console.log("Banco de dados ativado");
    pusher(data);
    const updatedData = JSON.stringify(model);
    localStorage.setItem("usuarios", updatedData);
    console.log(data);
  }
  