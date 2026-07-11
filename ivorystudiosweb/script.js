const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.12)";
    } else {
        navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,.08)";
    }
});

const cards = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.15
});

cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease";
    observer.observe(card);

    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 10;
        const rotateX = ((rect.height / 2 - y) / rect.height) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

const button = document.querySelector(".button");

if (button) {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
}