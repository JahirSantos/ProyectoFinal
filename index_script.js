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
