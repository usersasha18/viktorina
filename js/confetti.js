function createConfetti() {
    const container = document.querySelector(".confetti-container");

    const colors = ["#ff4d6d", "#ffd166", "#06d6a0", "#4dabf7", "#b197fc"];

    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        // случайный цвет
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];

        // случайная позиция
        confetti.style.left = Math.random() * 100 + "vw";

        // случайный размер
        const size = Math.random() * 6 + 4;
        confetti.style.width = size + "px";
        confetti.style.height = size * 1.5 + "px";

        // разная скорость падения
        confetti.style.animationDuration = (Math.random() * 2 + 3) + "s";

        confetti.style.animationDelay = Math.random() * 2 + "s";

        container.appendChild(confetti);

        // удаляем после анимации
        setTimeout(() => confetti.remove(), 6000);
    }
}

createConfetti();