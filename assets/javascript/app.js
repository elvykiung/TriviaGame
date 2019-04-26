var number;
var intervalId;
var correctPoint = 0;
var incorrectPoint = 0;
var skipQuestionPoint = 0;
var currentQuestionNumber = 0;

//  The run timer function for each question timer
function run() {
  number = 10;
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

//count down function for each question
function decrement() {
  number--;
  //  Show the number in the #show-number tag.
  $('#show-number').text(number);

  //  Once number hits zero
  if (number === 0) {
    //stop the timmer
    stop();
    // paush then go to next question function after 2s
    setTimeout(nextQuestion, 1000 * 2);
    //emty out previouse question element
    $('.btn-group-vertical').empty();
    //add html element with image
    $('#currQuestion').html('<h3>TIME OUT!!</h3><img src= "https://media.giphy.com/media/xTiTnCfxyp6uyd8mwo/giphy.gif">');
    // go to next question number
    currentQuestionNumber++;
    // add skip question point
    skipQuestionPoint++;
  }
}

// next question function
function nextQuestion() {
  // if no mor question ask, stop the game
  if (currentQuestionNumber >= questions.length) {
    endGame();
  } else {
    //run the individual timer
    run();
    //plug in current question to the html
    $('#currQuestion').text(questions[currentQuestionNumber].Question);
    //emty out multiple choice element before plug in any button
    $('.btn-group-vertical').empty();
    // list out all the answer choice to new button
    for (var ii = 0; ii < questions[currentQuestionNumber].Choices.length; ii++) {
      //create new button element
      var newButton = $('<button>');
      //add the text into the new button
      newButton.text(questions[currentQuestionNumber].Choices[ii]);
      // append the
      $('.btn-group-vertical').append(newButton);
      newButton.attr('class', 'btn btn-secondary m-1');
      newButton.attr('type', 'button');
    }

    // track user click input on each question
    $('.btn').on('click', function() {
      // if input click is corret, then go to next questio, log the correct answer point
      if ($(this).text() == questions[currentQuestionNumber].Answer) {
        //pause the timer
        stop();
        // empty the button
        $('.btn-group-vertical').empty();
        //replace the question with correct text and img
        $('#currQuestion').html('<h3>Correct!!</h3><img src= "https://www.merriam-webster.com/assets/mw/images/article/art-wap-article-main/alright-thumbs-up-1175@1x.jpg">');
        // add correct point in variable
        correctPoint++;
        // change the current question number
        currentQuestionNumber++;
        //display next question in 1.5s
        setTimeout(nextQuestion, 1000 * 1.5);
      } else {
        //if wrong, show the right answer, go to next question, log the incorrect answer point
        //stop the timer
        stop();
        //empty the button
        $('.btn-group-vertical').empty();
        // replace the question with wrong text and img
        $('#currQuestion').html(
          '<h3>WRONG!!</h3><img src= "http://assets-production.rovio.com/s3fs-public/styles/product_grid_image/public/Game%20icons/dream_blast_icon.jpg?mFeeCqScpestyDg1fptUqm_.njCpANR1&itok=Zc_WgsGa"><br>'
        );
        // append the correct answer
        $('#currQuestion').append('<br> Correct Answer is ' + questions[currentQuestionNumber].Answer);
        // add incorrct point
        incorrectPoint++;
        //change the current number to next one
        currentQuestionNumber++;
        // auto display next question in 3s
        setTimeout(nextQuestion, 1000 * 3);
      }
    });
  }
}
// call the next quesion at the begining of the game
nextQuestion();

// set reset function
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
//set timing for overall game setTimeout of 180s
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
  //click the reset function make variable reset
  $('.btn').on('click', reset);
}

// timing for overall game
setTimeout(endGame, 1000 * 180);

//stop function
function stop() {
  clearInterval(intervalId);
}
