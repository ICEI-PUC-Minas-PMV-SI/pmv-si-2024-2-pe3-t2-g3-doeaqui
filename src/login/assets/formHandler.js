const pfForm = document.getElementById("pfForm");
const cpfInput = document.getElementById("CPF");

cpfInput.onkeydown = (ev) => {
  const isNumber = /^[0-9]$/.test(ev.key);
  const isBackspace = ev.key === "Backspace";

  // Allow only numeric input or Backspace
  if (!isNumber && !isBackspace) {
    ev.preventDefault();
    console.log("Invalid input");
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
  console.log(cpfInput.value);
});
