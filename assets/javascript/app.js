//set timing
//timer for 60s
var number = 61;
var intervalId;
setTimeout(decrement, 1000 * 60);
//  The decrement function.
function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  number--;
  //  Show the number in the #show-number tag.
  $('#show-number').text(number);
  console.log('times');
  //  Once number hits zero...
  if (number === 0) {
    //  ...run the stop function.
    stop();

    //  Alert the user that time is up.
    alert('Time Up!');
  }
}
//run();

//-----------------------------------------------------
//set questions array object
var questions = [
  {
    Question: 'In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?',
    Choices: ['A. William and Elizabeth', 'B. Joseph and Catherine', 'C. John and Mary', 'D. George and Anne'],
    Answer: 'C. John and Mary'
  }
];

// track user click input on each question

// if input click is corret, then go to next questio, log the correct answer point

//if wrong, show the right answer, go to next question

//when time out, show the number of correct guesses, wrong guesses, unansewer and show start over button

// Start over, do not reload the page, just reset the game
