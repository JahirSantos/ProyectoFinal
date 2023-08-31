const listItems = document.querySelectorAll(".sidebar-list li" )
listItems.forEach((item) =>{
    item.addEventListener("click",() => {
        let isAcive = item.classList.contains("active");
        listItems.forEach((el) => {
            el.classList.remove("active");
        });
        if (isAcive) item.classList.remove("active");
        else item.classList.add("active");
    });
});
const toggleSidebar = document.querySelector(".toggle-sidebar");
const logo = document.querySelector(".logo-box");
const sidebar = document.querySelector(".sidebar");

toggleSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

logo.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

function showSection(sectionNumber) {
  // Oculta todas las secciones
  var sections = document.getElementsByClassName("section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }

  // Muestra la sección seleccionada
  var selectedSection = document.getElementById("section" + sectionNumber);
  if (selectedSection) {
    selectedSection.style.display = "block";
  }
}
showSection(1);
