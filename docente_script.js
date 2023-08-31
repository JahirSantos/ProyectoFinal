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
  
function viewContent(){
  const navLinks = document.querySelectorAll('.link');

  function showPage(target) {
    const pages = document.querySelectorAll('.section');
    pages.forEach(page => {
      page.style.display = 'none';
    });
    const selectedPage = document.getElementById(target);
    selectedPage.style.display = 'block';
  }
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      const target = this.getAttribute('data-target');
      showPage(target);
    });
  });

  showPage('home');
}