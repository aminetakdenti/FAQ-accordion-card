let buttons = document.querySelectorAll("button");
let prg = document.querySelectorAll("p");

prg.forEach((p) => {
  p.addEventListener("click", (e) => {
    if (e.target.className == "hide") {
      e.target.classList.remove("hide");
      show(e);
    } else {
      e.target.classList.add("hide");
      hide(e);
    }
  });
});

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.className == "hide") {
      e.target.classList.remove("hide");
      show(e);
    } else {
      e.target.classList.add("hide");
      hide(e);
    }
  });
});

const show = (evnts) => {
  console.log(evnts.target.parentElement.querySelector("p"));
  // Span Display Block
  evnts.target.parentElement.querySelector("span").style.display = "block";
  // Change The P Element fontWeight To Bold
  evnts.target.parentElement.querySelector("p").style.fontWeight = "bold";
  // Rotate The Btn To 180deg
  evnts.target.style.transform = "rotate(180deg)";
};
const hide = (evnts) => {
  console.log(evnts.target.parentElement.querySelector("p"));
  // Span Display none
  evnts.target.parentElement.querySelector("span").style.display = "none";
  // Change The P Element fontWeight To Normale
  evnts.target.parentElement.querySelector("p").style.fontWeight = "normale";
  // Rotate The Btn To 0deg
  evnts.target.style.transform = "rotate(0deg)";
};
