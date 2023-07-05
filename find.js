const btn = document.querySelector(".submit");
const errModal = document.querySelector(".err-msg");
const cancel = document.querySelector("[data-cancel]");
const btnClick = document.querySelector("[data-click]");

const handleToggler = () => {
  errModal.classList.toggle("flex");
  errModal.classList.toggle("hidden");
};

btn.addEventListener("click", handleToggler);
cancel.addEventListener("click", handleToggler);
btnClick.addEventListener("click", handleToggler);
