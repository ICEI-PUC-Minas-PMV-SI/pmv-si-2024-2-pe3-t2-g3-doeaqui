const pfForm = document.getElementById("pf_form");

const cpfInput = document.getElementById("CPF");
const emailInput = document.getElementById("pfMail");
const passInput = document.getElementById("pfPass");
const addressInput = document.getElementById("pfEnd");
const addressNumInput = document.getElementById("pfEndNum");
const phoneInput = document.getElementById("pfContact");

function phoneMask(phone) {
  return phone
    .replace(/\D/g, "") // Remove all non-digit characters
    .replace(/^(\d{2})(\d)/, "($1) $2") // Format area code with parentheses
    .replace(/(\d{5})(\d{4})$/, "$1-$2"); // Add dash after five digits in the main part
}

cpfInput.onkeydown = (ev) => {
  const isNumber = /^[0-9]$/.test(ev.key);
  const isBackspace = ev.key === "Backspace";
  const isCtrl = ev.key === "Control";
  const isA = ev.key === "A";
  const isTab = ev.key === "Tab";

  // Allow only numeric input or Backspace
  if (!isNumber && !isBackspace && !isCtrl && !isA && !isTab) {
    return;
  }

  // Automatically format CPF on valid input
  if (isNumber) {
    const length = cpfInput.value.length;

    // Insert formatting characters as needed
    if (length === 3 || length === 7) {
      cpfInput.value += ".";
    } else if (length === 11) {
      cpfInput.value += "-";
    }
  }
};

// Ensure formatting is kept on input change
cpfInput.addEventListener("input", () => {
  let value = cpfInput.value.replace(/\D/g, ""); // Remove non-numeric characters
  if (value.length > 3 && value.length <= 6) {
    value = `${value.slice(0, 3)}.${value.slice(3)}`;
  } else if (value.length > 6 && value.length <= 9) {
    value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6)}`;
  } else if (value.length > 9) {
    value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(
      6,
      9
    )}-${value.slice(9, 11)}`;
  }
  cpfInput.value = value;
});
if (phoneInput instanceof HTMLInputElement) {
  phoneInput.addEventListener("input", (ev) => {
    ev.target.value = phoneMask(ev.target.value);
  });
}
pfForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const data =
    {
      email: emailInput.value,
      contato: phoneInput.value,
      cpf: cpfInput.value,
      cnpj: null,
      endereco: [addressInput.value, addressNumInput.value],
      senha: passInput.value,
      tipoUsuario: "PF",
    }
  store(data);
});
