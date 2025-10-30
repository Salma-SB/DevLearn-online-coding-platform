const cards = document.querySelectorAll(".card");

let prec = null;

cards.forEach(card => {
    const content = card.querySelector("p");
    const icon = card.querySelector(".title i");
    content.style.display = "none";

    card.addEventListener('click', () => {
        if (prec && prec !== card) {
            const precp = prec.querySelector("p");
            const preci = prec.querySelector(".title i");
            precp.style.display = "none";
            preci.classList.remove("rotate");
        }

        if (content.style.display === "none") {
            content.style.display = "block";
            icon.classList.add("rotate");
            prec = card;
        } else {
            content.style.display = "none";
            icon.classList.remove("rotate");
            prec = null;
        }
    });
});
