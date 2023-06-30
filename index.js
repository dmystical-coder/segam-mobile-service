const ham = document.querySelector(".ham");
const mobileNav = document.querySelector(".toggle");

const handleToggler = () => {
	mobileNav.classList.toggle("hidden");
	mobileNav.classList.toggle("flex");
};

ham.addEventListener("click", handleToggler);
mobileNav.addEventListener("click", handleToggler);
