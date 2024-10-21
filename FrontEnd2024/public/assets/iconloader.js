const holder = document.querySelectorAll("svg")[0];
const pass = document.querySelector("input[type=password]");
const passHolder = document.querySelectorAll("svg")[1];
const iconloader = () => {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
<circle cx="12" cy="10" r="3" stroke="#222222" stroke-linecap="round"/>
<circle cx="12" cy="12" r="9" stroke="#222222"/>
<path d="M18 18.7059C17.6461 17.6427 16.8662 16.7033 15.7814 16.0332C14.6966 15.3632 13.3674 15 12 15C10.6326 15 9.30341 15.3632 8.21858 16.0332C7.13375 16.7033 6.35391 17.6427 6 18.7059" stroke="#222222" stroke-linecap="round"/>
</svg>
    `;
};
const passIconLoader = () => {
  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M19.5857 30.4318C21.8399 30.4318 23.6672 28.6044 23.6672 26.3503C23.6672 24.0961 21.8399 22.2688 19.5857 22.2688C17.3316 22.2688 15.5042 24.0961 15.5042 26.3503C15.5042 28.6044 17.3316 30.4318 19.5857 30.4318Z"
        stroke="black "
        stroke-width="2.44889"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27.7487 36.1458H11.4227C4.89236 36.1458 3.25976 34.5133 3.25976 27.9829V24.7177C3.25976 18.1873 4.89236 16.5547 11.4227 16.5547H27.7487C34.2791 16.5547 35.9117 18.1873 35.9117 24.7177V27.9829C35.9117 34.5133 34.2791 36.1458 27.7487 36.1458Z"
        stroke="black"        stroke-width="2.44889"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M29.3813 16.5547V13.2895C29.3813 7.88558 27.7487 3.4939 19.5857 3.4939C11.4227 3.4939 9.79015 7.88558 9.79015 13.2895V16.5547"
        stroke="black"
        stroke-width="2.44889"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    `;
};
const unlockedPassIconLoader = () => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 40 40" fill="none">
<path d="M19.5857 30.4318C21.8399 30.4318 23.6672 28.6044 23.6672 26.3503C23.6672 24.0961 21.8399 22.2688 19.5857 22.2688C17.3316 22.2688 15.5042 24.0961 15.5042 26.3503C15.5042 28.6044 17.3316 30.4318 19.5857 30.4318Z" stroke="black" stroke-width="2.44889" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.7487 36.1458H11.4227C4.89236 36.1458 3.25976 34.5133 3.25976 27.9829V24.7177C3.25976 18.1873 4.89236 16.5547 11.4227 16.5547H27.7487C34.2791 16.5547 35.9117 18.1873 35.9117 24.7177V27.9829C35.9117 34.5133 34.2791 36.1458 27.7487 36.1458Z" stroke="black" stroke-width="2.44889" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.5857 3.4939C11.4227 3.4939 9.79015 7.88558 9.79015 13.2895V16.5547" stroke="black" stroke-width="2.44889" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
};
passHolder.innerHTML = passIconLoader();

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

holder.innerHTML += iconloader();
