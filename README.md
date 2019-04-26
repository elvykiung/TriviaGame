# TriviaGame

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Code Overview](#Code-Overview)

## General info

This is a trivial game allow user to test his/her random fun knowlage in 3m

![Image](https://github.com/elvykiung/TriviaGame/blob/master/assets/images/final_look.PNG?raw=true)

## Technologies

Project is created with:

- JavaScript ES6
- JQuery
- Bootstrap
- HTML 5 & CSS

## Setup

To run this project, download entier package and open it in web browser or

Clone this repo to your desktop and run npm install to install all the dependencies.

## Code Overview

### Summary

1. Key event handler
2. Event listener
3. Javascript timing
4. JSON formating

### JavaScript Function explain

1. `questions[currentQuestionNumber].Question`

   allow to access the questions arrey question

2. `$(this).text() == questions[currentQuestionNumber].Answer`

   a condition to check if user click element = the answer of the questions

3. `setTimeout(nextQuestion, 1000 * 1.5)`

   setTimout is js function that will run the nextQuestion function after 1.5s

4. Utalize JQuery `.empty()` `.html()` `.append` to manipulate DOM
