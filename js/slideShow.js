var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

//Slide 2
var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(n) {
  showDivs2((slideIndex2 += n));
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("slide2");
  if (n > x.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex2 - 1].style.display = "block";
}

//Slide 3
var slideIndex3 = 1;
showDivs3(slideIndex3);

function plusDivs3(n) {
  showDivs3((slideIndex3 += n));
}

function showDivs3(n) {
  var i;
  var x = document.getElementsByClassName("slide3");
  if (n > x.length) {
    slideIndex3 = 1;
  }
  if (n < 1) {
    slideIndex3 = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex3 - 1].style.display = "block";
}

//Slide 4
var slideIndex4 = 1;
showDivs4(slideIndex4);

function plusDivs4(n) {
  showDivs4((slideIndex4 += n));
}

function showDivs4(n) {
  var i;
  var x = document.getElementsByClassName("slide4");
  if (n > x.length) {
    slideIndex4 = 1;
  }
  if (n < 1) {
    slideIndex4 = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex4 - 1].style.display = "block";
}

//Slide 5
var slideIndex5 = 1;
showDivs5(slideIndex5);

function plusDivs5(n) {
  showDivs5((slideIndex5 += n));
}

function showDivs5(n) {
  var i;
  var x = document.getElementsByClassName("slide5");
  if (n > x.length) {
    slideIndex5 = 1;
  }
  if (n < 1) {
    slideIndex5 = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex5 - 1].style.display = "block";
}
