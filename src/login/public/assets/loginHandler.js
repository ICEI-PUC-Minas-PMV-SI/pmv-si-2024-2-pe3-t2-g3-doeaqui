const mainForm = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("pass");
const checkedPJ = document.querySelector("input[id='cnpj']:checked");
const checkedPF = document.querySelector("input[id='cpf']:checked");

console.log(email);
console.log(pass);
email.focus();

function radioChecker(radio, info) {
  if (radio) {
    const condition =
      info.tipoUsuario == radio.ariaLabel
        ? alert("Login Com Sucesso")
        : alert(`Você não está registrado como um ${radio.ariaLabel}`);
    return condition;
  }
}

function retrieveStorage(email, pass) {
  const model = JSON.parse(localStorage.getItem("usuarios"));
  if (model instanceof Array) {
    model.forEach((st, k) => {
      if (!(k >= 2)) {
        return;
      } else {
        const info = st[0];
        const logged = st[1];
        console.log(info);
        console.log(logged);
        if (info.email === email && info.senha === pass) {
          radioChecker(checkedPF, info);
          radioChecker(checkedPJ, info);
          logged.isLoggedIn = true;
          console.log(logged.isLoggedIn);
          localStorage.setItem("usuarios", JSON.stringify(model));
          window.location.href = "/campanha/campanhaDoador.html";
          console.log("User logged in status changed to true");
          return;
        } else {
          alert(
            "Os campos estão incorretos. Tente novamente por favor ou efetue um cadastro"
          );
          return;
        }
      }
    });
  }
}
mainForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  retrieveStorage(email.value, pass.value);
});
