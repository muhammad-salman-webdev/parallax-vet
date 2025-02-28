const sonogramIcon = document.getElementById("sonogram-icon");
const comTabContent = document.getElementById("com-tab-content-main");
const mailIcon = document.getElementById("mail-icon");
const mailTabContent = document.getElementById("mail-tab-content-main");

sonogramIcon.addEventListener("click", (event) => {
  event.preventDefault();

  comTabContent.classList.add("show");
  mailTabContent.classList.remove("show");
});
mailIcon.addEventListener("click", (event) => {
  event.preventDefault();

  mailTabContent.classList.add("show");
  comTabContent.classList.remove("show");
});
