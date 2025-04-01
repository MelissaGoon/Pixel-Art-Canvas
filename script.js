

function createGrid(n) {
    const block_container = document.querySelector(".block-container")
    let width = String((16 * (n+1)) + (1 * (n + 1)));
    block_container.style.width = width + "px";

    for (let i = 0; i < (n * n); i++) {
        const block = document.createElement("div");
        block.classList.toggle("block");
        block.addEventListener("mouseover", () => {
            block.style.backgroundColor = 'white';
        });
        block_container.appendChild(block);

    }
}

createGrid(17);
