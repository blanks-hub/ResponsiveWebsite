
$(document).ready(function() {

  var fields = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
  ];

// reset button
  $("#btn").click(function() {
    reset();
    $(".field").each(function() {
      $(this).text("")
    });
  });
// reset function
  function reset() {
    fields = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "]
    ];
  }

// enemy function
  function O() {
    //Now a random field will be selected
    var x = Math.floor(Math.random() * fields.length());
    var y = Math.floor(Math.random() * fields.length());
    var randomField = fields[x][y];
    if (randomField == " ") {

    }
    else {
      O();
    }
  }

//checks if a player has won
  function winCheck() {

    if (fields[0][0] == fields[0][1] && fields[0][0] == fields[0][2] && fields[0][0] != " ") {
      return true;
    } else if (fields[1][0] == fields[1][1] && fields[1][0] == fields[1][2] && fields[1][0] != " ") {
      return true;
    } else if (fields[2][0] == fields[2][1] && fields[2][0] == fields[2][2] && fields[2][0] != " ") {
      return true;
    } else if (fields[0][0] == fields[1][0] && fields[0][0] == fields[2][0] && fields[0][0] != " ") {
      return true;
    } else if (fields[0][1] == fields[1][1] && fields[0][1] == fields[2][1] && fields[0][1] != " ") {
      return true;
    } else if (fields[0][2] == fields[1][2] && fields[0][2] == fields[2][2] && fields[0][2] != " ") {
      return true;
    } else if (fields[0][0] == fields[1][1] && fields[0][0] == fields[2][2] && fields[0][0] != " ") {
      return true;
    } else if (fields[2][0] == fields[1][1] && fields[2][0] == fields[0][2] && fields[2][0] != " ") {
      return true;
    }

  }
// Click function
// Player sets a X and then the PC sets a random O
// main function
  $(".field").click(function() {
    if ($(this).text() == "") {
        $(this).text("X");
        if ($(this).attr('id') == "topL") {
          console.log("0,0: Array wurde gesetzt");
          fields[0][0] = "X";
        }
        if ($(this).attr('id') == "topM") {
          console.log("0,1: Array wurde gesetzt");
          fields[0][1] = "X";
        }
        if ($(this).attr('id') == "topR") {
          console.log("0,2: Array wurde gesetzt");
          fields[0][2] = "X";
        }
        if ($(this).attr('id') == "midL") {
          console.log("1,0: Array wurde gesetzt");
          fields[1][0] = "X";
        }
        if ($(this).attr('id') == "midM") {
          console.log("1,1: Array wurde gesetzt");
          fields[1][1] = "X";
        }
        if ($(this).attr('id') == "midR") {
          console.log("1,2: Array wurde gesetzt");
          fields[1][2] = "X";
        }
        if ($(this).attr('id') == "bottomL") {
          console.log("2,0: Array wurde gesetzt");
          fields[2][0] = "X";
        }
        if ($(this).attr('id') == "bottomM") {
          console.log("2,1: Array wurde gesetzt");
          fields[2][1] = "X";
        }
        if ($(this).attr('id') == "bottomR") {
          console.log("2,2: Array wurde gesetzt");
          fields[2][2] = "X";
        }

        if (winCheck()) {
          alert("X hat gewonnen!");
          reset();
          $(".field").each(function() {
            $(this).text("")
          });
        }

      }
  });


});
