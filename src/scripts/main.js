$(document).ready(function () {
  var turn = 'x';
  var message = $('h2');
  var winnerDeclared = false;

  $('.square').on('click', function() {
    if (!winnerDeclared) {
      // don't add mark if box is taken
      here = $(this).html();
      if (here.length > 0) {
        return;
      }
      //check if "x" or "o" was placed last
      if (turn === 'x') {
        $(this).text('X');
        turn = 'o';
      } else {
        $(this).text('O');
        turn = 'x';
      }
      checkwinner();
    }
  }
});

  // check all possible win situations
  function checkwinner() {
    var one = $('#1').html();
    var two = $('#2').html();
    var three = $('#3').html();
    var four = $('#4').html();
    var five = $('#5').html();
    var six = $('#6').html();
    var seven = $('#7').html();
    var eight = $('#8').html();
    var nine = $('#9').html();


    if (one === 'X' && two === 'X' && three === 'X') {
      winnerDeclared = true;
      message.html('X Won!');
      setTimeout(resetgame, 2000);
    } else if (one === 'O' && two === 'O' && three === 'O') {
      winnerDeclared = true;
      message.html('O Won!');
      setTimeout(resetgame, 2000);
    } else if (one === 'X' && four === 'X' && seven === 'X') {
      winnerDeclared = true;
      message.html('X Won!');
      setTimeout(resetgame, 2000);
    } else if (one === 'O' && four === 'O' && seven === 'O') {
      winnerDeclared = true;
      message.html('X Won!');
      setTimeout(resetgame, 2000);
    } else if (one === 'X' && five === 'X' && nine === 'X') {
      winnerDeclared = true;
      message.html('X Won!');
      setTimeout(resetgame, 2000);
    } else if (one === 'O' && five === 'O' && nine === 'O') {
      winnerDeclared = true;
      message.html('O Won!');
      setTimeout(resetgame, 2000);
    } else if (two === 'X' && five === 'X' && eight === 'X') {
      winnerDeclared = true;
      message.html('X Won!');
      setTimeout(resetgame, 2000);
    } else if (two === 'O' && five === 'O' && eight === 'O') {
      winnerDeclared = true;
      message.html('O Won!');
      setTimeout(resetgame, 2000);
    } else if (three === 'X' && five === 'X' && seven === 'X') {
      winnerDeclared = true;
      message.html('X Won!');
      setTimeout(resetgame, 2000);
    } else if (three === 'O' && five === 'O' && seven === 'O') {
      winnerDeclared = true;
      message.html('O Won!');
      setTimeout(resetgame, 2000);
    } else if (three === 'X' && six === 'X' && nine === 'X') {
      winnerDeclared = true;
      message.html('X Won!');
      setTimeout(resetgame, 2000);
    } else if (three === 'O' && six === 'O' && nine === 'O') {
      winnerDeclared = true;
      message.html('O Won!');
      setTimeout(resetgame, 2000);
    } else if (four === 'X' && five === 'X' && six === 'X') {
      winnerDeclared = true;
      message.html('X Won!');
      setTimeout(resetgame, 2000);
    } else if (four === 'O' && five === 'O' && six === 'O') {
      winnerDeclared = true;
      message.html('O Won!');
      setTimeout(resetgame, 2000);
    } else if (seven === 'X' && eight === 'X' && nine === 'X') {
      winnerDeclared = true;
      message.html('X Won!');
      setTimeout(resetgame, 2000);
    } else if (seven === 'O' && eight === 'O' && nine === 'O') {
      winnerDeclared = true;
      message.html('O Won!');
      setTimeout(resetgame, 2000);
      // if no wins game is a tie
    } else if (one.length > 0 && two.length > 0 && three.length > 0 && four.length > 0 && five.length > 0 && six.length > 0 && seven.length > 0 && eight.length > 0 && nine.length > 0) {
      message.html('It was a tie!');
      setTimeout(resetgame, 2000);
    }

    //clear board when winner declared
    function resetgame() {
      var blanksquare = $('.square').html();
      $('.square').text('');
      $('h2').text('');
      turn = 'x';
      // don't allow players to place mark after winner declared
      // if (blanksquare.length < 1) {
      //   $('.square').css('color', 'white');
      }
    }

  }
})
