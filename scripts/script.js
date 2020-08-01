console.log('Java Script is working!');

// notification bar toogle and animation
$(function() {
  setTimeout(function() {
    return $(".notification-bar").animate({
      height: "toggle"
    }, "fast")
  }, 500);
  return $("#ok").on("click", function() {
    $("#barwrap").css("margin-bottom", "0px");
    $(".notification-bar").animate({
      height: "toggle"
    }, "fast");
    return !1
  })
});

// Hamburger Button onclick
$(function() {
  return $(".toggle-button").on("click", function() {
    $("#nav").animate({
      height: "toggle"
    }, "fast");
    return !1
  })
});

// Product Description onclick
$(function() {
  return $(".product").on("click", function() {
    $(this).find(".product__text").animate({
      height: "toggle"
    }, "fast");
    return !1
  })
});

/*
// active class for nav bar onclick
function addActive (active_id) {
  var navArr = document.getElementsByClassName('nav-btn')
  for (var i=0; i<navArr.length; i++) {
    if (navArr[i].id != active_id) {
      navArr[i].classList.remove("active-nav");
    }
    else {
      navArr[i].classList.add("active-nav");
    }
  }
  console.log("addActive ausgeführt");
}

// Get all buttons with class="btn" inside the container
var btns = document.getElementsByClassName("nav-btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-nav");
    current[0].className = current[0].className.replace(" active-nav", "");
    this.className += " active-nav";
    console.log("hat gefunkt");
  });
}
*/