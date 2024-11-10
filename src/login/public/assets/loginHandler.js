const fields = {
  mainForm : document.getElementById("form"),
  email : document.getElementById("email"),
  password : document.getElementById("pass"),
  checkedPJ_PF : document.querySelectorAll("input[type='radio']"),
}

fields.email.focus();

function radioChecker(userInfo) {
  let selectedRadio = Array.from(fields.checkedPJ_PF).find(radio => radio.checked);
  const isUserTypeMatch = userInfo.tipoUsuario === selectedRadio.ariaLabel;
  if (isUserTypeMatch) {
    alert("Login Com Sucesso");
    return true;
  } else {
    alert(`Você não está registrado como um ${selectedRadio.ariaLabel}`);
    return false;
  }
}

function login(email, password) {
  debugger
  const users = StorageData.getUsers();
  const user = findUserByEmailAndPassword(users, email, password);
  if (radioChecker(user) && user) {
    handleSuccessfulLogin(user);
  } else {
    handleFailedLogin();
  }
}

function findUserByEmailAndPassword(users, email, password) {
  return users.find(user => user.email === email && user.senha === password);
}

function handleSuccessfulLogin(user) {
    StorageData.setLogged(user);
    redirectUserToSuccessPage();
}

function handleFailedLogin() {
  StorageData.setLogged();
  alert("Os campos estão incorretos. Tente novamente por favor ou efetue um cadastro")
}

function redirectUserToSuccessPage() {
  window.location.href = "../../../campanha/campanhaDoador.html";
}


fields.mainForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  login(fields.email .value, fields.password.value);
});
