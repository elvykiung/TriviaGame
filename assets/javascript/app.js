var number;
var intervalId;
var correctPoint = 0;
var incorrectPoint = 0;
var skipQuestionPoint = 0;
var currentQuestionNumber = 0;

//  The decrement function.
function run() {
  number = 10;
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  number--;
  //  Show the number in the #show-number tag.
  $('#show-number').text(number);

  //  Once number hits zero...
  if (number === 0) {
    stop();
    setTimeout(nextQuestion, 1000 * 2);
    $('.btn-group-vertical').empty();
    $('#currQuestion').html('<h3>TIME OUT!!</h3><img src= "https://media.giphy.com/media/xTiTnCfxyp6uyd8mwo/giphy.gif">');

    currentQuestionNumber++;
    skipQuestionPoint++;
  }
}
function reset() {
  number;
  intervalId;
  correctPoint = 0;
  incorrectPoint = 0;
  skipQuestionPoint = 0;
  currentQuestionNumber = 0;
  nextQuestion();
  setTimeout(endGame, 1000 * 15);
}
//set timing for over all game
function endGame() {
  var unansewerPoint = questions.length - currentQuestionNumber + skipQuestionPoint;
  $('.btn-group-vertical').empty();
  stop();
  //when time out, show the number of correct guesses, wrong guesses, unansewer and show start over button
  $('#currQuestion').html('You have ' + correctPoint + ' correct scorrect point! <br> You have ' + incorrectPoint + ' incorrect scorrect point! <br> You have ' + unansewerPoint + ' unansewer!<br>');
  // Start over, do not reload the page, just reset the game
  var restbtn = $('<button>');
  restbtn.text('Reset');
  restbtn.attr('class', 'btn btn-secondary btn-block mt-4');
  $('#currQuestion').append(restbtn);
  $('.btn').on('click', reset);
}

setTimeout(endGame, 1000 * 180);

//stop function
function stop() {
  clearInterval(intervalId);
}

//-----------------------------------------------------

// next question function
function nextQuestion() {
  if (currentQuestionNumber >= questions.length) {
    endGame();
  } else {
    run();

    $('#currQuestion').text(questions[currentQuestionNumber].Question);
    $('.btn-group-vertical').empty();
    for (var ii = 0; ii < questions[currentQuestionNumber].Choices.length; ii++) {
      var newButton = $('<button>');
      newButton.text(questions[currentQuestionNumber].Choices[ii]);
      $('.btn-group-vertical').append(newButton);
      newButton.attr('class', 'btn btn-secondary m-1');
      newButton.attr('type', 'button');
    }

    // track user click input on each question
    $('.btn').on('click', function() {
      if ($(this).text() == questions[currentQuestionNumber].Answer) {
        // if input click is corret, then go to next questio, log the correct answer point
        stop();
        setTimeout(nextQuestion, 1000 * 1.5);
        $('.btn-group-vertical').empty();
        $('#currQuestion').html('<h3>Correct!!</h3><img src= "https://www.merriam-webster.com/assets/mw/images/article/art-wap-article-main/alright-thumbs-up-1175@1x.jpg">');
        correctPoint++;
        currentQuestionNumber++;
      } else {
        //if wrong, show the right answer, go to next question, log the incorrect answer point

        stop();
        setTimeout(nextQuestion, 1000 * 3);
        $('.btn-group-vertical').empty();
        $('#currQuestion').html(
          '<h3>WRONG!!</h3><img src= "http://assets-production.rovio.com/s3fs-public/styles/product_grid_image/public/Game%20icons/dream_blast_icon.jpg?mFeeCqScpestyDg1fptUqm_.njCpANR1&itok=Zc_WgsGa"><br>'
        );
        $('#currQuestion').append('Correct Answer is ' + questions[currentQuestionNumber].Answer);
        incorrectPoint++;
        currentQuestionNumber++;
      }
    });
  }
}
nextQuestion();
