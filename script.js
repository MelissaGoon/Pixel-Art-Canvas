const resize = document.querySelector("#resize");
const block_container = document.querySelector(".block-container");
const size_display = document.querySelector(".size-display");
const reset = document.querySelector(".reset");
const erase = document.querySelector(".erase");
const random = document.querySelector(".random");

let drawing_active = false;
let erase_active = false;
let random_active = false;

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
        erase.classList.remove("active-button");
    } else if (!erase_active) {
        erase_active = true;
        random_active = false;
        erase.classList.add("active-button");
        random.classList.remove("active-button");       
    }
})

random.addEventListener("click", () => {
    if (random_active) {
        random_active = false;
        random.classList.remove("active-button");
    } else if (!random_active) {
        random_active = true;
        erase_active = false;
        random.classList.add("active-button");
        erase.classList.remove("active-button"); 
    }

})



function changeColor(block, event) {
    if (drawing_active || event.type == 'click') {
        if (erase_active) {
            block.style.backgroundColor = 'white';
        } else if (random_active) {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            block.style.backgroundColor = "#" + randomColor;

        } else {
            block.style.backgroundColor = 'rgb(11, 0, 59)';
        }
    }
}

function createGrid(n) {
    let blockSize = 499 / n;

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
