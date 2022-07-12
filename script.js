let imageList = [
  "alexandra-gorn-JIUjvqe2ZHg-unsplash.jpg",
  "christopher-jolly-GqbU78bdJFM-unsplash.jpg",
  "kam-idris-_HqHX3LBN18-unsplash.jpg",
  "outsite-co-R-LK3sqLiBw-unsplash.jpg",
  "rowan-heuvel-bjej8BY1JYQ-unsplash.jpg",
];

let index = 0;

let main = document.getElementById("main");
let pointItems = document.querySelector(".point-items");

function changeImage() {
  pointItems.children[index].classList.remove("selected");
  index++;
  if (index > imageList.length - 1) {
    index = 0;
  }
  main.style.backgroundImage = `url(img/${imageList[index]})`;
  pointItems.children[index].classList.add("selected");
}

function myCoroutine() {
  setTimeout(() => {
    console.log("Image set");
    changeImage();
    myCoroutine();
  }, 4000);
}

window.addEventListener("load", () => {
  for (let i = 0; i < imageList.length; i++) {
    let html = `
            <div class="point-item"></div>
        `;

    pointItems.insertAdjacentHTML("beforeend", html);
  }
  myCoroutine();
});
