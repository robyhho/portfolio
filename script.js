//SETTERS

//SELECTORS
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

//EVENT LISTENERS

logo.addEventListener("click", moveTo);
navAbout.addEventListener("click", moveTo);
navWork.addEventListener("click", moveTo);
navToolkit.addEventListener("click", moveTo);
navContact.addEventListener("click", moveTo);
dot.addEventListener("click", moveTo);

//FUNCTIONS

function moveTo(event) {
  let target = event.target.id;
  target = target.replace("nav", "").toLowerCase();
  console.log(target);
  const targetElem = document.getElementById(`${target}`);
  targetElem.scrollIntoView({ behavior: "smooth" });
}
