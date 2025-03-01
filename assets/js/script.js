const allTabs = document.querySelectorAll("[data-content-tab]");
const allTabBtns = document.querySelectorAll("[data-tab-btn]");

allTabBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    // Removing all the tabs class
    allTabs.forEach((_tab) => _tab.classList.remove("show"));
    allTabBtns.forEach((_btn) => _btn.classList.remove("active"));

    // Add the only one class
    const id = btn.getAttribute("data-tab-btn");
    const curTab = document.querySelector(`[data-content-tab='${id}']`);

    btn.classList.add("active");
    curTab.classList.add("show");
  });
});
