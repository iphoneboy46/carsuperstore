window.addEventListener("load", () => {
  const btnNext = document.getElementById("next");
  btnNext.onclick = () => {
    let lists = document.querySelectorAll(".item-car");
    let slide = document.getElementById("slide");
    slide.appendChild(lists[0]);
  };

  const btnPrev = document.getElementById("prev");
  btnPrev.onclick = () => {
    let lists = document.querySelectorAll(".item-car");
    let slide = document.getElementById("slide");
    slide.prepend(lists[lists.length - 1]);
  };
});
