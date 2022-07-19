let faqClick = document.querySelectorAll(".faq-info");

faqClick.forEach((ele) => {
  ele.onclick = (e) => {
    if (!ele.querySelector("button").classList.contains("hide")) {
      e.target.parentElement.querySelector("p").style.fontWeight = "bold";
      e.target.parentElement.querySelector("span").style.display = "block";
      ele.querySelector("button").classList.toggle("hide");
    } else {
      e.target.parentElement.querySelector("p").style.fontWeight = "normal";
      e.target.parentElement.querySelector("span").style.display = "none";
      ele.querySelector("button").classList.toggle("hide");
    }
  };
});
