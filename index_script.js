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