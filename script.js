const container = document.querySelector(".container");
const btn = document.querySelector("button");
const limit = 100;

btn.addEventListener("click", () =>
  changeGridSize(prompt("Enter new size for nxn grid"))
);

function createGrid(xDots) {
  let indexRow = 0,
    indexDot = 0;
  let row, dot;

  for (indexRow; indexRow < xDots; indexRow++) {
    row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    for (indexDot; indexDot < xDots; indexDot++) {
      dot = document.createElement("div");
      dot.classList.add("dot");
      dot.classList.add("rounded-corner");
      addHoverEffect(dot);
      row.appendChild(dot);
    }
    indexDot = 0;
  }
}

function addHoverEffect(dot) {
  dot.addEventListener(
    "mouseover",
    () => (dot.style.backgroundColor = "#383838")
  );
}

function changeGridSize(size) {
  removeAllChildNodes(container);
  if (size > 0) {
    if (size >= limit) {
      createGrid(100);
    } else {
      createGrid(size);
    }
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

window.onload = () => createGrid(16);
