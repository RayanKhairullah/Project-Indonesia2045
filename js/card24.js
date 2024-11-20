document.addEventListener("DOMContentLoaded", function () {
    // Card ke-2 dan ke-4
    const card2 = document.getElementById("card-2");
    const card4 = document.getElementById("card-4");

    // Hapus flipped ketika hover
    card2.addEventListener("mouseenter", () => {
        card2.querySelector(".flip-card-inner").classList.remove("flipped");
    });
    card2.addEventListener("mouseleave", () => {
        card2.querySelector(".flip-card-inner").classList.add("flipped");
    });

    card4.addEventListener("mouseenter", () => {
        card4.querySelector(".flip-card-inner").classList.remove("flipped");
    });
    card4.addEventListener("mouseleave", () => {
        card4.querySelector(".flip-card-inner").classList.add("flipped");
    });
});
