const form = document.getElementById("pj_form");
const cnpjInpt = document.getElementById("CNPJ");
const emailInpt = document.getElementById("pjMail");
const passInpt = document.getElementById("pjPass");
const addressInpt = document.getElementById("pjEnd");
const addressNumInpt = document.getElementById("pjEndNum");
const phoneInpt = document.getElementById("pjContact");


function phoneMask(phone) {
  return phone
    .replace(/\D/g, "") // Remove all non-digit characters
    .replace(/^(\d{2})(\d)/, "($1) $2") // Format area code with parentheses
    .replace(/(\d{5})(\d{4})$/, "$1-$2"); // Add dash after five digits in the main part
}

function cnpjMask(cnpj) {
  return cnpj
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
}
cnpjInpt.addEventListener("keydown", (ev) => {
  const isNumber = /^[0-9]$/.test(ev.key);
  const isBackspace = ev.key === "Backspace";
  const isCtrl = ev.key === "Control";
  const isA = ev.key == "A";
  const isTab = ev.key === "Tab";
  if (!isNumber && !isBackspace && !isCtrl && !isA && !isTab) {
    return;
  }
  if (isNumber) {
    const length = cnpjInpt.value.length;
    if (length === 2 || length === 6) {
      cnpjInpt.value += ".";
    } else if (length === 10) cnpjInpt.value += "/";
    else if (length === 15) cnpjInpt.value += "-";
  }
});
cnpjInpt.addEventListener("input", () => {
  if (cnpjInpt instanceof HTMLInputElement) {
    cnpjInpt.value = cnpjMask(cnpjInpt.value);
  }
});
if (phoneInpt instanceof HTMLInputElement) {
  phoneInpt.addEventListener("input", (ev) => {
    ev.target.value = phoneMask(ev.target.value);
  });
}
form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const data =
    {
      email: emailInpt.value,
      contato: phoneInpt.value,
      cpf: null,
      cnpj: cnpjInpt.value,
      endereco: [addressInpt.value, addressNumInpt.value],
      senha: passInpt.value,
      tipoUsuario: "PJ",
    }
  store(data);
});
