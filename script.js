// fade in animation
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll('.fade-in').forEach(el=>{
    observer.observe(el);
});

const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

// toggle menu
menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("open");
});

// auto close when clicking a link
document.querySelectorAll("#navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuIcon.classList.remove("open");
    });
});

