const block_container = document.querySelector(".block-container")

for (let i = 0; i < (16*16); i++) {
    const block = document.createElement("div");
    block.classList.toggle("block");
    block.addEventListener("mouseover", () => {
        block.style.backgroundColor = 'white';
    });
    block_container.appendChild(block);

}