const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


/* For Reusable drop down*/

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

/* For Reusable nav

var coll = document.getElementsByClassName("nav-icon");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}*/

/* collapsable side bar
var mini2 = false;



function toggleSidebar() {
  
  if (mini2) {
    console.log("opening sidebar");
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    this.mini2 = false;
  } else {
    console.log("closing sidebar");
    document.getElementById("mySidebar").style.width = "85px";
    document.getElementById("main").style.marginLeft = "85px";
    this.mini2 = true;
  }
}

  toggleSidebar(mini2);

  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "85px";
  document.getElementById("main").style.marginLeft = "85px";
}
///
/* For slide deck */
let slideIndex = [1, 1, 1, 1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"];

showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n, no) {
  console.log(`Button clicked: Change slide in set ${no} by ${n}`);
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  console.log(`Showing slides for set ${no} (class: ${slideId[no]}), slide number ${n}. Total slides: ${x.length}`);
  
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  
  if (x[slideIndex[no] - 1]) {
    x[slideIndex[no] - 1].style.display = "block";
  } else {
    console.log(`Error: Slide ${slideIndex[no] - 1} does not exist for set ${no}`);
  }
}


/* Visibilty Nav bar */

document.querySelector('.nav-icon').addEventListener('click', function () {
  const contentNav = document.querySelector('.content-nav');
  contentNav.classList.toggle('show');
});