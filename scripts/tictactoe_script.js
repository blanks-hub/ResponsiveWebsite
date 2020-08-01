$(document).ready(function() {

  // field array to check the winning combinations in winCheck()
  var fields = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
  ];

  function winCheck() {
    // checks all fieldarray win combinations
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

  function drawCheck() {
    // loops through the fieldarray and checks whether every field
    // has been marked
    for (var i = 0; i < fields.length; i++) {
      var field = fields[i];
      for (var j = 0; j < field.length; j++) {
        if (field[j] == "X" || field[j] == "O");
        else {
          return false;
        }
      }
    }
    return true;
  }

  // reset function
  function reset() {
    fields = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "]
    ];
  }

  // checks which field was clicked and adds the player to the fieldarray
  function setField(field, player) {

    if (field.attr('id') == "topL") {
      fields[0][0] = player;
    }
    if (field.attr('id') == "topM") {
      fields[0][1] = player;
    }
    if (field.attr('id') == "topR") {
      fields[0][2] = player;
    }
    if (field.attr('id') == "midL") {
      fields[1][0] = player;
    }
    if (field.attr('id') == "midM") {
      fields[1][1] = player;
    }
    if (field.attr('id') == "midR") {
      fields[1][2] = player;
    }
    if (field.attr('id') == "bottomL") {
      fields[2][0] = player;
    }
    if (field.attr('id') == "bottomM") {
      fields[2][1] = player;
    }
    if (field.attr('id') == "bottomR") {
      fields[2][2] = player;
    }
  }

  function generateRandomField() {
    // selects a random field by generating a random index over
    // the .field class
    var len = $(".field").length;
    var random = Math.floor(Math.random() * len);
    var randomField = $(".field").eq(random);

    // checks wether the field is already marked
    // if not recursive call
    if (!randomField.hasClass("x") && !randomField.hasClass("o")) {
      return randomField;
    } else {
      return generateRandomField();
    }
  }

  // Click function
  // Player sets a X and then the PC sets a O
  $(".field").click(function() {
    // Checks wether the field has been clicked
    if (!$(this).hasClass("x") && !$(this).hasClass("o")) {
      // Marks the field
      $(this).addClass("x");

      // Adds the X to the fieldarray
      setField($(this), "X");

      if (winCheck()) {
        $(".winning-message-text").text("Congratulations! Put in your E-Mail to get the discount code:");
        $("#mail").show();
        $(".winning-message").addClass("show");
        return;
      } else {
        if (drawCheck()) {
          $(".winning-message-text").text("Draw!");
          $("#mail").hide();
          $(".winning-message").addClass("show");
          return;
        }
      }

      // Now the it's the PCs turn
      var oField = generateRandomField();
      // Marks the field
      oField.addClass("o");
      // Adds the O to the fieldarray
      setField(oField, "O");


      if (winCheck()) {
        $(".winning-message-text").text("Oh no ;(");
        $("#mail").hide();
        $(".winning-message").addClass("show");
        return;
      } else {
        if (drawCheck()) {
          $(".winning-message-text").text("Draw!");
          $("#mail").hide();
          $(".winning-message").addClass("show");
          return;
        }
      }
    }
  });

  // Try again button
  $("#restart-btn").click(function() {
    $(".winning-message").removeClass("show");
    reset();
    $(".field").each(function() {
      $(this).removeClass("x");
      $(this).removeClass("o");
    });
  });

});