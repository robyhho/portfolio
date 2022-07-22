//SETTERS

//SELECTORS
const loader = document.getElementById("loaderContainer");

const logo = document.getElementById("logo");
const navAbout = document.getElementById("navAbout");
const navWork = document.getElementById("navWork");
const navToolkit = document.getElementById("navToolkit");
const navContact = document.getElementById("navContact");
const navMenu = document.getElementById("navMenu");
const menuIcon = document.getElementById("menuIcon");

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

/* Navbar Events */
menuIcon.addEventListener("click", showMenu);
document.body.addEventListener("click", hideMenu);

/* MoveTo Events */
logo.addEventListener("click", moveTo);
navAbout.addEventListener("click", moveTo);
navWork.addEventListener("click", moveTo);
navToolkit.addEventListener("click", moveTo);
navContact.addEventListener("click", moveTo);
dot.addEventListener("click", moveTo);

/* Work Events */
project1.addEventListener("click", showInfo);
project2.addEventListener("click", showInfo);
project3.addEventListener("click", showInfo);
project4.addEventListener("click", showInfo);

//FUNCTIONS

/* Loader Removal function  */
// TODO Re-enable Loader
// document.addEventListener("DOMContentLoaded", function (event) {
//   setTimeout(() => {
//     loader.style.display = "none";
//   }, 3000);
// });

/* MoveTo Function
  Moves window to id of target elem.
*/
function moveTo(event) {
  let target = event.target.id;
  if (target === "dot" || target === "arrowUp") {
    logo.scrollIntoView({ behavior: "smooth" });
    return;
  }
  target = target.replace("nav", "").toLowerCase();
  const targetElem = document.getElementById(`${target}`);
  targetElem.scrollIntoView({ behavior: "smooth" });
}

/* showInfo Func
  Reveals hidden info modal
  sets event listener on x button
*/
function showInfo(event) {
  event.stopPropagation();
  let targetDiv = event.target.querySelector(".projectInfo");
  targetDiv.classList.remove("hide");
  event.target.removeEventListener("click", showInfo);
  targetDiv.querySelector(".cross").addEventListener("click", hideInfo);
}

/* hideInfo Func
  hides info modal
  sets event listener on portfolio image 
*/
function hideInfo(event) {
  event.stopPropagation();
  let parentElem = event.target.parentNode;
  parentElem.classList.add("hide");
  event.target.removeEventListener("click", hideInfo);

  parentElem.parentNode.addEventListener("click", showInfo);
}

/* showMenu Func
  Shows menu modal when menuIcon is clicked
*/
function showMenu(event) {
  event.stopPropagation;
  if (navMenu.style.display === "none") {
    navMenu.style.display = "flex";
  } else {
    navMenu.style.display = "none";
  }
}

/* hideMenu
  closes menu modal
  when clicked item
  is not menuIcon
*/
function hideMenu(event) {
  event.stopPropagation;
  if (event.target.id !== "menuIcon") {
    navMenu.style.display = "none";
  }
}
