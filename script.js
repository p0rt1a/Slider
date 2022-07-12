let imageList = [
  "alexandra-gorn-JIUjvqe2ZHg-unsplash.jpg",
  "christopher-jolly-GqbU78bdJFM-unsplash.jpg",
  "kam-idris-_HqHX3LBN18-unsplash.jpg",
  "outsite-co-R-LK3sqLiBw-unsplash.jpg",
  "rowan-heuvel-bjej8BY1JYQ-unsplash.jpg",
];

let index = -1;

let main = document.getElementById("main");
let pointItems = document.querySelector(".point-items");
let pointList = [];

function slide(ind) {
  main.style.backgroundImage = `url(img/${imageList[ind]})`;
  clearSelected();
  pointItems.children[ind].classList.add("selected");
}

function clearSelected() {
  for (let i = 0; i < imageList.length; i++) {
    pointItems.children[i].classList.remove("selected");
  }
}

function coroutine() {
  setTimeout(() => {
    index++;
    if (index >= imageList.length) {
      index = 0;
    }
    slide(index);
    coroutine();
  }, 3000);
}

window.addEventListener("load", () => {
  for (let i = 0; i < imageList.length; i++) {
    let html = `
            <a class="point-item"></a>
        `;

    pointItems.insertAdjacentHTML("beforeend", html);
  }
  pointList = document.querySelectorAll(".point-item");
  createPointerEvents();
  coroutine();
});

function createPointerEvents() {
  for (let i = 0; i < pointList.length; i++) {
    pointList[i].addEventListener("click", () => {
      let itemIndex = i;
      index = itemIndex;
      slide(itemIndex);
    });
  }
}
