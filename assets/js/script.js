const allTabs = document.querySelectorAll("[data-content-tab]");
const allTabBtns = document.querySelectorAll("[data-tab-btn]");

allTabBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    // Removing all the tabs class
    allTabs.forEach((_tab) => _tab.classList.remove("show"));

    // Add the only one class
    allTabs[index].classList.add("show");
  });
});
