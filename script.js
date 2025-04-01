const resize = document.querySelector(".resize");
const block_container = document.querySelector(".block-container")

resize.addEventListener("click", () => {
    let response = prompt("How many pixels wide?");
    let size = parseInt(response);

    if (size >= 100) {
        alert("Too large! Try something less than 100.");
    } else if (size == NaN || size == null) {
        alert("Try entering a number between 1 and 100");
    } else {

        while (block_container.firstChild) {
            block_container.removeChild(block_container.lastChild);
        }
        createGrid(size)
    }
})



function createGrid(n) {
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

createGrid(16);
