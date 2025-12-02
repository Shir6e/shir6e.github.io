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

const words = [
    "Pelajar",
    "Gamer",
    "Perlaukan",
    "Tolak Angin",
    "Orang Biasa"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect() {
    let currentWord = words[index];
    
    if (!isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000); // jeda sebelum menghapus
            return;
        }
    } else {
        typingElement.textContent = currentWord.substring(0, Math.max(0, charIndex - 1));
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % words.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 100); 
}

typeEffect();
