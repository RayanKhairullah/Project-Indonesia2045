document.addEventListener("DOMContentLoaded", () => {
    const flipCards = document.querySelectorAll(".flip-card");

    flipCards.forEach((flipCard) => {
        flipCard.addEventListener("click", () => {
            const flipCardInner = flipCard.querySelector(".flip-card-inner");

            // Tambahkan atau hapus kelas flip
            if (flipCardInner.classList.contains("flipped")) {
                flipCardInner.classList.remove("flipped");
            } else {
                flipCardInner.classList.add("flipped");
            }
        });
    });
});