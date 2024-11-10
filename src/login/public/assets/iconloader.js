const holder = document.querySelectorAll("svg")[0];
const personHolder = document.querySelector("#svg_pf");
const companyHolder = document.querySelector("#svg_pj");
const pass = document.querySelector("input[type=password]");
const pfPass = document.querySelectorAll("input[type=password")[1];
const pjPass = document.querySelectorAll("input[type=password]")[2];
const mailHolder = document.getElementsByClassName("mailer-div")[0];
const passHolder = document.querySelector(".locker-div");
const mailDiagHolder = document.getElementsByClassName("mailer-div")[1];
const passDiagHolder = document.querySelectorAll(".locker-div")[1];
const mailPjHolder = document.getElementsByClassName("mailer-div")[2];
const passPjHolder = document.querySelectorAll(".locker-div")[2];


const iconloader = () => {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
<circle cx="12" cy="10" r="3" stroke="#114d4d" stroke-linecap="round"/>
<circle cx="12" cy="12" r="9" stroke="#114d4d"/>
<path d="M18 18.7059C17.6461 17.6427 16.8662 16.7033 15.7814 16.0332C14.6966 15.3632 13.3674 15 12 15C10.6326 15 9.30341 15.3632 8.21858 16.0332C7.13375 16.7033 6.35391 17.6427 6 18.7059" stroke="#114d4d" stroke-linecap="round"/>
</svg>
    `;
};
const personLoader = () =>
  `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="119"
    height="119"
    viewBox="0 0 119 119"
    fill="none"
  >
    <path
      d="M59.7558 19.8333C64.9738 19.8333 69.9781 21.9228 73.6678 25.6423C77.3575 29.3618 79.4303 34.4065 79.4303 39.6666C79.4303 44.9267 77.3575 49.9714 73.6678 53.6909C69.9781 57.4103 64.9738 59.4999 59.7558 59.4999C54.5378 59.4999 49.5335 57.4103 45.8438 53.6909C42.1541 49.9714 40.0813 44.9267 40.0813 39.6666C40.0813 34.4065 42.1541 29.3618 45.8438 25.6423C49.5335 21.9228 54.5378 19.8333 59.7558 19.8333ZM59.7558 69.4166C81.4961 69.4166 99.1048 78.292 99.1048 89.2499V99.1666H20.4067V89.2499C20.4067 78.292 38.0154 69.4166 59.7558 69.4166Z"
      fill="#6E9987"
    />
  </svg>
  `;
const companyLoader = () =>
  `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="104"
    height="104"
    viewBox="0 0 104 104"
    fill="none"
  >
    <g clip-path="url(#clip0_98_93)">
      <path
        d="M79.0002 66.5H70.6668V74.8333H79.0002M79.0002 49.8333H70.6668V58.1667H79.0002M87.3335 83.1667H54.0002V74.8333H62.3335V66.5H54.0002V58.1667H62.3335V49.8333H54.0002V41.5H87.3335M45.6668 33.1667H37.3335V24.8333H45.6668M45.6668 49.8333H37.3335V41.5H45.6668M45.6668 66.5H37.3335V58.1667H45.6668M45.6668 83.1667H37.3335V74.8333H45.6668M29.0002 33.1667H20.6668V24.8333H29.0002M29.0002 49.8333H20.6668V41.5H29.0002M29.0002 66.5H20.6668V58.1667H29.0002M29.0002 83.1667H20.6668V74.8333H29.0002M54.0002 33.1667V16.5H12.3335V91.5H95.6668V33.1667H54.0002Z"
        fill="#6E9987"
      />
    </g>
    <defs>
      <clipPath id="clip0_98_93">
        <rect
          width="103.167"
          height="104"
          fill="white"
          transform="translate(0.804199)"
        />
      </clipPath>
    </defs>
  </svg>
  `;
const mailLoader = () => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.19667 19.0217 2.00067 18.5507 2 18V6C2 5.45 2.196 4.97933 2.588 4.588C2.98 4.19667 3.45067 4.00067 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.805 4.98 22.0007 5.45067 22 6V18C22 18.55 21.8043 19.021 21.413 19.413C21.0217 19.805 20.5507 20.0007 20 20H4ZM12 13L20 8V6L12 11L4 6V8L12 13Z" fill="#114D4D"/>
</svg>`;
};
const passIconLoader = () => {
  return `
    <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M6 22C5.45 22 4.97933 21.8043 4.588 21.413C4.19667 21.0217 4.00067 20.5507 4 20V10C4 9.45 4.196 8.97933 4.588 8.588C4.98 8.19667 5.45067 8.00067 6 8H7V6C7 4.61667 7.48767 3.43767 8.463 2.463C9.43833 1.48833 10.6173 1.00067 12 1C13.3827 0.999334 14.562 1.487 15.538 2.463C16.514 3.439 17.0013 4.618 17 6V8H18C18.55 8 19.021 8.196 19.413 8.588C19.805 8.98 20.0007 9.45067 20 10V20C20 20.55 19.8043 21.021 19.413 21.413C19.0217 21.805 18.5507 22.0007 18 22H6ZM12 17C12.55 17 13.021 16.8043 13.413 16.413C13.805 16.0217 14.0007 15.5507 14 15C13.9993 14.4493 13.8037 13.9787 13.413 13.588C13.0223 13.1973 12.5513 13.0013 12 13C11.4487 12.9987 10.978 13.1947 10.588 13.588C10.198 13.9813 10.002 14.452 10 15C9.998 15.548 10.194 16.019 10.588 16.413C10.982 16.807 11.4527 17.0027 12 17ZM9 8H15V6C15 5.16667 14.7083 4.45833 14.125 3.875C13.5417 3.29167 12.8333 3 12 3C11.1667 3 10.4583 3.29167 9.875 3.875C9.29167 4.45833 9 5.16667 9 6V8Z" fill="#114D4D"/>
</svg>
    `;
};
const unlockedPassIconLoader = () => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
<path d="M14 7C14.5304 7 15.0391 7.21071 15.4142 7.58579C15.7893 7.96086 16 8.46957 16 9V19C16 19.5304 15.7893 20.0391 15.4142 20.4142C15.0391 20.7893 14.5304 21 14 21H2C1.46957 21 0.960859 20.7893 0.585786 20.4142C0.210714 20.0391 0 19.5304 0 19V9C0 8.46957 0.210714 7.96086 0.585786 7.58579C0.960859 7.21071 1.46957 7 2 7H11V5C11 4.20435 10.6839 3.44129 10.1213 2.87868C9.55871 2.31607 8.79565 2 8 2C7.20435 2 6.44129 2.31607 5.87868 2.87868C5.31607 3.44129 5 4.20435 5 5H3C3 3.67392 3.52678 2.40215 4.46447 1.46447C5.40215 0.526784 6.67392 0 8 0C8.65661 0 9.30679 0.129329 9.91342 0.380602C10.52 0.631876 11.0712 1.00017 11.5355 1.46447C11.9998 1.92876 12.3681 2.47995 12.6194 3.08658C12.8707 3.69321 13 4.34339 13 5V7H14ZM8 16C8.53043 16 9.03914 15.7893 9.41421 15.4142C9.78929 15.0391 10 14.5304 10 14C10 13.4696 9.78929 12.9609 9.41421 12.5858C9.03914 12.2107 8.53043 12 8 12C7.46957 12 6.96086 12.2107 6.58579 12.5858C6.21071 12.9609 6 13.4696 6 14C6 14.5304 6.21071 15.0391 6.58579 15.4142C6.96086 15.7893 7.46957 16 8 16Z" fill="#114D4D"/>
</svg>`;
};
passHolder.innerHTML += passIconLoader();
mailHolder.innerHTML += mailLoader();

personHolder.innerHTML += personLoader();
mailDiagHolder.innerHTML += mailLoader();
passDiagHolder.innerHTML += passIconLoader();

companyHolder.innerHTML += companyLoader();
mailPjHolder.innerHTML += mailLoader();
passPjHolder.innerHTML += passIconLoader();

passHolder.onclick = function () {
  if (passHolder.classList.contains("plocker")) {
    passHolder.classList.replace("plocker", "punlocker");
    passHolder.innerHTML = unlockedPassIconLoader();
    pass.setAttribute("type", "text");
  } else if (passHolder.classList.contains("punlocker")) {
    passHolder.classList.replace("punlocker", "plocker");
    passHolder.innerHTML = passIconLoader();
    pass.setAttribute("type", "password");
  }
};
passDiagHolder.onclick = function () {
  if (passDiagHolder.classList.contains("plocker")) {
    passDiagHolder.classList.replace("plocker", "punlocker");
    passDiagHolder.innerHTML = unlockedPassIconLoader();
    pfPass.setAttribute("type", "text");
  } else if (passDiagHolder.classList.contains("punlocker")) {
    passDiagHolder.classList.replace("punlocker", "plocker");
    passDiagHolder.innerHTML = passIconLoader();
    pfPass.setAttribute("type", "password");
  }
};
passPjHolder.onclick = function () {
  if (passPjHolder.classList.contains("plocker")) {
    passPjHolder.classList.replace("plocker", "punlocker");
    passPjHolder.innerHTML = unlockedPassIconLoader();
    pjPass.setAttribute("type", "text");
  } else if (passPjHolder.classList.contains("punlocker")) {
    passPjHolder.classList.replace("punlocker", "plocker");
    passPjHolder.innerHTML = passIconLoader();
    pjPass.setAttribute("type", "password");
  }
};

holder.innerHTML += iconloader();
