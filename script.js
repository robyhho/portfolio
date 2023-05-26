//SETTERS
let burgerMenuScreenWidth = 800;
let menuIsOpen = false;

/* Create observer */

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

//SELECTORS

const hiddenLeftElems = document.querySelectorAll(".hiddenLeft");
const hiddenRightElems = document.querySelectorAll(".hiddenRight");

const loader = document.getElementById("loaderContainer");
const header = document.getElementById("header");

const navAbout = document.getElementById("navAbout");
const navWork = document.getElementById("navWork");
const navToolkit = document.getElementById("navToolkit");
const navContact = document.getElementById("navContact");
const navMenu = document.getElementById("navMenu");
const menuIcon = document.getElementById("menuBtn");

const about = document.getElementById("about");
const work = document.getElementById("work");
const toolkit = document.getElementById("toolkit");
const contact = document.getElementById("contact");

const dot = document.getElementById("dot");

const project1 = document.getElementById("project1");
const project2 = document.getElementById("project2");
const project3 = document.getElementById("project3");
const project4 = document.getElementById("project4");

const viewLive1 = document.getElementById("viewLive1");
const viewLive2 = document.getElementById("viewLive2");
const viewLive3 = document.getElementById("viewLive3");
const viewLive4 = document.getElementById("viewLive4");

const github1 = document.getElementById("github1");
const github3 = document.getElementById("github3");
const github4 = document.getElementById("github4");

const btnEmail = document.getElementById("btnEmail");

//EVENT LISTENERS

/* Navbar Events */
menuIcon.addEventListener("click", showMenu);

/* MoveTo Events */

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

viewLive1.addEventListener("click", goToUrl);
viewLive2.addEventListener("click", goToUrl);
viewLive3.addEventListener("click", goToUrl);
viewLive4.addEventListener("click", goToUrl);

github1.addEventListener("click", goToUrl);
github3.addEventListener("click", goToUrl);
github4.addEventListener("click", goToUrl);

/* Observer events */
hiddenLeftElems.forEach((el) => observer.observe(el));
hiddenRightElems.forEach((el) => observer.observe(el));
//FUNCTIONS

/* Loader Removal function  */
// TODO Re-enable Loader
document.addEventListener("DOMContentLoaded", function (event) {
  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
});

/* MoveTo Function
  Moves window to id of target elem.
*/

function moveTo(event) {
  let target = event.target.id;
  if (target === "dot" || target === "arrowUp") {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    return;
  }

  target = target.replace("nav", "").toLowerCase();

  if (target == "logo") {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    return;
  }
  const targetElem = document.getElementById(`${target}`);
  targetElem.scrollIntoView({ behavior: "smooth" });
  menuIcon.classList.remove("open");
  menuIsOpen = false;
  if (window.screen.width <= burgerMenuScreenWidth) {
    navMenu.style.display = "none";
  }
}

/* showInfo Func
  Reveals hidden info modal
  sets event listener on x button
*/
function showInfo(event) {
  event.stopPropagation;
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
  if (!menuIsOpen) {
    menuIcon.classList.add("open");
    menuIsOpen = true;
    navMenu.style.display = "flex";
  } else {
    menuIcon.classList.remove("open");
    menuIsOpen = false;
    navMenu.style.display = "none";
  }
}

/* hideMenu
  closes menu modal
  when clicked item
  is not menuIcon
*/
// function hideMenu(event) {
//   event.stopPropagation;
//   if (event.target.id !== "menuIcon" || event.target.id !== "menuBtn") {
//     navMenu.style.display = "none";
//   }
// }

function goToUrl(event) {
  switch (event.target.id) {
    case "viewLive1":
      window.open(
        "https://robyhho.github.io/showCaseProjects/rock-paper-scissors/index.html",
        "_blank"
      );
      break;
    case "viewLive2":
      window.open("", "_blank");
      break;
    case "viewLive3":
      window.open(
        "https://robyhho.github.io/showCaseProjects/todo-app-main/index.html",
        "_blank"
      );
      break;
    case "viewLive4":
      window.open(
        "https://robyhho.github.io/showCaseProjects/tip-calculator/index.html",
        "_blank"
      );
      break;
    case "github1":
      window.open(
        "https://github.com/robyhho/showCaseProjects/tree/master/rock-paper-scissors",
        "_blank"
      );
      break;
    case "github3":
      window.open(
        "https://github.com/robyhho/showCaseProjects/tree/master/todo-app-main",
        "_blank"
      );
      break;
    case "github4":
      window.open(
        "https://github.com/robyhho/showCaseProjects/tree/master/tip-calculator",
        "_blank"
      );
      break;
  }
}

// function goToEmail(event) {
//   href = "mailto:someone@yoursite.com";
//   }
