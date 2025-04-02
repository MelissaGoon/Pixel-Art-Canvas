const resize = document.querySelector("#resize");
const block_container = document.querySelector(".block-container");
const size_display = document.querySelector(".size-display");
const reset = document.querySelector(".reset");
const erase = document.querySelector(".erase");

let drawing_active = false;
let erase_active = false;

block_container.addEventListener("mousedown", () => { drawing_active = true; });
block_container.addEventListener("mouseup", () => { drawing_active = false; });
block_container.addEventListener("mouseleave", () => { drawing_active = false; });


resize.oninput = function () {
    let size = this.value;
    block_container.innerHTML = "";
    createGrid(size);
    size_display.textContent = String(size) + " x " + String(size);
}

reset.addEventListener("click", () => {
    for (const child of block_container.children) {
        child.style.backgroundColor = 'white';
    }
})

erase.addEventListener("click", () => {
    if (erase_active) {
        erase_active = false;
        erase.style.backgroundColor = 'rgb(47, 0, 255)';
        erase.style.color = 'white';
    } else if (!erase_active) {
        erase_active = true;
        erase.style.backgroundColor = 'rgb(220, 247, 16)';
        erase.style.color = 'rgb(47, 0, 255)';
    }
})

function changeColor(block, event) {
    if (drawing_active || event.type == 'click') {
        if (erase_active) {
            block.style.backgroundColor = 'white';
        } else {
            block.style.backgroundColor = 'rgb(47, 0, 255)';
        }
    }
}

function createGrid(n) {
    let blockSize = Math.floor(500 / n);

    for (let i = 0; i < (n * n); i++) {
        const block = document.createElement("div");
        block.classList.toggle("block");
        block.style.width = blockSize + "px";
        block.style.height = blockSize + "px";
        block.draggable = false;

        block.addEventListener("click", (e) => changeColor(block,e));
        block.addEventListener("mouseover", (e) => changeColor(block, e));

        block.addEventListener("dragstart", (event) => event.preventDefault());

        block_container.appendChild(block);

    }
}

createGrid(15);
