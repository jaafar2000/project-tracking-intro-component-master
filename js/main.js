let btn = document.querySelector(".h__btn");
let span01 = document.querySelector(".sn01");
let span02 = document.querySelector(".sn02");
let span03 = document.querySelector(".sn03");
let menu = document.querySelector(".menu");

btn.addEventListener("click", function () {
  if (span01.classList.contains("rotate45")) {
    span01.classList.remove("rotate45");
  } else {
    span01.classList.add("rotate45");
  }

  if (span02.classList.contains("vanish")) {
    if (menu.classList.contains("show__List")) {
      menu.classList.replace("show__List", "hide__List");
    } else if (menu.classList.contains("hide__List")) {
      menu.classList.replace("hide__List", "show__List");
    } else {
      menu.classList.add("show__List");
    }
    span02.classList.remove("vanish");
  } else {
    span02.classList.add("vanish");
    if (menu.classList.contains("show__List")) {
      menu.classList.replace("show__List", "hide__List");
    } else if (menu.classList.contains("hide__List")) {
      menu.classList.replace("hide__List", "show__List");
    } else {
      menu.classList.add("show__List");
    }
  }

  if (span03.classList.contains("rotate__45")) {
    span03.classList.remove("rotate__45");
  } else {
    span03.classList.add("rotate__45");
  }
});
