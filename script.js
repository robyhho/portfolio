//SETTERS

//SELECTORS
const loader = document.getElementById("loaderContainer");

const logo = document.getElementById("logo");
const navAbout = document.getElementById("navAbout");
const navWork = document.getElementById("navWork");
const navToolkit = document.getElementById("navToolkit");
const navContact = document.getElementById("navContact");

const about = document.getElementById("about");
const work = document.getElementById("work");
const toolkit = document.getElementById("toolkit");
const contact = document.getElementById("contact");

const dot = document.getElementById("dot");

const project1 = document.getElementById("project1");
const project2 = document.getElementById("project2");
const project3 = document.getElementById("project3");
const project4 = document.getElementById("project4");

//EVENT LISTENERS

logo.addEventListener("click", moveTo);
navAbout.addEventListener("click", moveTo);
navWork.addEventListener("click", moveTo);
navToolkit.addEventListener("click", moveTo);
navContact.addEventListener("click", moveTo);
dot.addEventListener("click", moveTo);

project1.addEventListener("click", showInfo);
project2.addEventListener("click", showInfo);
project3.addEventListener("click", showInfo);
project4.addEventListener("click", showInfo);

//FUNCTIONS

/* Loader Removal function  */
document.addEventListener("DOMContentLoaded", function (event) {
  setTimeout(() => {
    loader.style.display = "none";
  }, 3000);
});

function moveTo(event) {
  let target = event.target.id;
  target = target.replace("nav", "").toLowerCase();
  const targetElem = document.getElementById(`${target}`);
  targetElem.scrollIntoView({ behavior: "smooth" });
}

function showInfo(event) {
  event.stopPropagation();
  let targetDiv = event.target.querySelector(".projectInfo");
  targetDiv.classList.remove("hide");
  event.target.removeEventListener("click", showInfo);
  targetDiv.querySelector(".cross").addEventListener("click", hideInfo);
}

function hideInfo(event) {
  event.stopPropagation();
  let parentElem = event.target.parentNode;
  parentElem.classList.add("hide");
  event.target.removeEventListener("click", hideInfo);

  parentElem.parentNode.addEventListener("click", showInfo);
}
