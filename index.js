'use strict';

$( document ).ready(function() {
    console.log( "document loaded" );
});

const STORE = [
    // this will be our array of objects that store questions, choices, etc.
    {   question:'Which of these is not one of the four elements represented in the western zodiac?',
        options: ['Earth', 'Fire', 'Wind', 'Water'],
        theAnswer: 'Wind',
        img: ['https://media.giphy.com/media/UrD5e0PtLurxkqAmnT/giphy.gif', 'zodiac signs'],
        correct: ['https://media.giphy.com/media/OFIsBxe3v7mKI/giphy.gif', 'happy dog'],
        incorrect: ['https://media.giphy.com/media/l0HlAHBcpZoET6aBy/giphy.gif', 'high wind, flying umbrellas'],
        feedback: 'The four elements represented are Fire, Earth, Air, and Water.'
    },
    {   question:'Which constellation is is represented by the scales and is said to represent balance and harmony?',
        options: ['Aquarius', 'Pisces', 'Libra', 'Aries'],
        theAnswer: 'Libra',
        img: ['https://media.giphy.com/media/65KcVFVlftpA4f4yO7/giphy.gif', 'libra symbol'],
        correct: ['https://media.giphy.com/media/jyusCXYL6FPK1CDdjs/giphy.gif', 'libra constellation'],
        incorrect: ['https://media.giphy.com/media/xT8qBit7YomT80d0M8/giphy.gif', 'unbalanced scales'],
        feedback: 'Libra (September 23 - October 22) strives to create equilibrium. Mahatma Gandhi, John Lennon and Jimmy Carter were all Libras.'
    },
    {   question:'Which of these groups are the fire signs in western astrology?',
        options: ['Aquarius, Libra, Gemini', 'Cancer, Scorpio, Pisces', 'Sagittarius, Leo, Aries', 'Virgo, Taurus, Capricorn'],
        theAnswer: 'Sagittarius, Leo, Aries',
        img: ['https://media.giphy.com/media/2YelwDuXXKSg1GfFvx/giphy.gif', '12 zodiac signs'],
        correct: ['https://media.giphy.com/media/QMkPpxPDYY0fu/giphy.gif', 'fireworks toast'],
        incorrect: ['https://media.giphy.com/media/nrXif9YExO9EI/giphy.gif', 'spongebob fire'],
        feedback: 'Fire signs have a passion for life. They are masters of seizing opportunities.'
    },
    {   question:'Which ancient civilization is primarily credited with the creation of the 12 zodiac signs we reference today?',
        options: ['Babylon', 'Greece', 'Rome', 'Egypt'],
        theAnswer: 'Babylon',
        img: ['https://media.giphy.com/media/U3PCUoDC3db7NxCoCX/giphy.gif', 'Greek cat'],
        correct: ['https://media.giphy.com/media/OcZp0maz6ALok/giphy.gif', 'Liz Lemon high five'],
        incorrect: ['https://media.giphy.com/media/uVDQEuHab311EvjIKF/giphy.gif', 'not technically'],
        feedback: 'The Babylonians are credited with creating the 12 zodiac signs we use today. However, all of these civilizations contributed to western astrology in various ways.'
    },
    {   question:'Which constellation is represented by the goddess of wheat & agriculture?',
        options: ['Aquarius', 'Pisces', 'Virgo', 'Aries'],
        theAnswer: 'Virgo',
        img: ['https://media.giphy.com/media/SiEsjaKkBCStNdYXvV/giphy.gif', 'Virgo symbol'],
        correct: ['https://media.giphy.com/media/q1zsIXcp8N2ne/giphy.gif', 'Leslie Knope Pawnee goddesses'],
        incorrect: ['https://media.giphy.com/media/Rd7ztus86tlGmNJ1f4/giphy.gif', 'wheat hand'],
        feedback: 'Virgos (August 23 - September 22) are perfectionists at heart. An earth sign, their symbol reflects their deep connection to the physical world.'
    },
    {   question:'What is a “map” of the planets and constellations at a person’s time & place of birth called?',
        options: ['planet map', 'birth chart', 'star grid', 'planetary graph'],
        theAnswer: 'birth chart',
        img: ['https://media.giphy.com/media/S60H9JdcyNlcpGfsAo/giphy.gif', 'birth chart'],
        correct: ['https://media.giphy.com/media/g4LjgClvpwzo8tPVHE/giphy.gif', 'illustrated planets'],
        incorrect: ['https://media.giphy.com/media/85HZdaXZRo4y4/giphy.gif', 'birthday question'],
        feedback: 'A birth chart or natal chart is a map of the placement of the planets at the exact moment someone was born. Astrologists believe that these charts hold the key to understanding someone\'s personality and circumstances.'
    },
    {   question:'Which sign does this symbol represent? This sign is also associated with adventorous free-spirits.',
        options: ['Scorpio', 'Leo', 'Sagittarius', 'Taurus'],
        theAnswer: 'Sagittarius',
        img: ['https://media.giphy.com/media/4PXVVn5iHHjTf2oorg/giphy.gif', 'Sagittarius symbol'],
        correct: ['https://media.giphy.com/media/jVc1vUq8dM1NPPjzCi/giphy.gif', 'Sagittarius constellation'],
        incorrect: ['https://media.giphy.com/media/3Z1pqaxLhl0MQZggKp/giphy.gif', 'archery symbol'],
        feedback: 'The last fire sign in the zodiac, Sagittarius (November 22 - December 21) is represented by the archer. It is known for its constant pursuit of knowledge and adventure.'
    },
    {   question:'Which is the correct match of element & associated traits?',
        options: ['Air: passionate & exuberant', 'Earth: intellectual & curious', 'Fire: practical & grounded', 'Water: intuitive & emotional'],
        theAnswer: 'Water: intuitive & emotional',
        img: ['https://media.giphy.com/media/iez6J0FZgc2TJW0t79/giphy.gif', 'four elements'],
        correct: ['https://media.giphy.com/media/ri8Kb9LOe5Nza/giphy.gif', 'happy elephant in water'],
        incorrect: ['https://media.giphy.com/media/148x4ezZxvpIeA/giphy.gif', 'Kermit drenched'],
        feedback: 'Like water, these signs are fluid. They float between reality and their imagination and are known for their nurturing, empathetic, and artistic nature.'
    },
    {   question:'Which of the following is not an astrological symbol?',
        options: ['bull', 'archer', 'griffin', 'sea goat'],
        theAnswer: 'griffin',
        img: ['https://media.giphy.com/media/l3q2Xl2Rd8wZfMCaI/giphy.gif', 'planets'],
        correct: ['https://media.giphy.com/media/2XrwfijeA6JtS/giphy.gif', 'solar system chart'],
        incorrect: ['https://media.giphy.com/media/quO0X65yj6gw0/giphy.gif', 'not quite, falling cat'],
        feedback: 'The griffin is not represented in the western zodiac. The bull symbolizes Taurus, the archer represents Sagittarius, and the sea goat is the symbol of Capricorn.'
    },
    {   question:'Which set of characteristics is associated with the Leo sign?',
        options: ['Vivacious, theatrical, passionate', 'Humanitarian, nonconformist, free-spirited', 'Intuitive, compassionate, protective', 'Logical, practical, systematic'],
        theAnswer: 'Vivacious, theatrical, passionate',
        img: ['https://media.giphy.com/media/LTE5DtKtERIU0VVISK/giphy.gif', 'Leo symbol'],
        correct: ['https://media.giphy.com/media/3otPoUGBfbuOgFhcpW/giphy.gif', 'Lion'],
        incorrect: ['https://media.giphy.com/media/7OMOtoKfsR212/giphy.gif', 'cat dressed as a lion'],
        feedback: 'Like other fire signs, Leos (July 23 - August 22) seize opportunities. Represented by the lion, they are natural leaders like Barack Obama, Amelia Earhart, and Neil Armstrong'
    }
];

// the next group contains constants, html data, etc.

// creates number
let questionNumber = 0;

// creates quiz score
let currentScore = 0;

// creates rank for final results feedback
let rank;

// I need to create a new function to call this one - rather than doing them together using: 
// Generates question form
function createQuestion() {
    if (questionNumber < STORE.length) {
        return `<form class='questions' id='js-quiz-question'>
                <fieldset name='question-answer-form'>
                    <legend class='quiz-question'>${STORE[questionNumber].question}</legend>
                        <img class='question-img' src=${STORE[questionNumber].img[0]} alt=${STORE[questionNumber].img[1]}>
                            <br>
                        <label for=${STORE[questionNumber].options[0]} class='answer-choice'>
                            <input class='radio-choice' type='radio' name='answer-choice' value=${STORE[questionNumber].options[0]}>${STORE[questionNumber].options[0]}
                        </label>
                            <br>
                        <label for=${STORE[questionNumber].options[1]} class='answer-choice'>
                            <input class='radio-choice' type='radio' name='answer-choice' value=${STORE[questionNumber].options[1]}>${STORE[questionNumber].options[1]}
                        </label>
                            <br>
                        <label for=${STORE[questionNumber].options[2]} class='answer-choice'>
                            <input class='radio-choice' type='radio' name='answer-choice' value=${STORE[questionNumber].options[2]}>${STORE[questionNumber].options[2]}
                        </label>    
                            <br>
                        <label for=${STORE[questionNumber].options[3]} class='answer-choice'>    
                            <input class='radio-choice' type='radio' name='answer-choice' value=${STORE[questionNumber].options[3]}>${STORE[questionNumber].options[3]}
                        </label>
                            <br>
                    <input class='quiz-submit' type='submit' value='Submit'>
                </fieldset>
            </form>`;
    } else {
        $('#js-question-counter').toggleClass('hide');
        $('#js-score-counter').toggleClass('hide');
        $('.js-quiz-form').remove();
        $('.js-results-page').toggleClass('hide');
        renderResultsPage();
        howDidYouDo();
        tryAgain();
        console.log('showed final results');
    }
};

// creates html for question number & current score
function numberDisplay() {
    $('#js-question-counter').html(`
        <span class='question-score'>Question ${questionNumber + 1} of 10</span>`);
    $('#js-score-counter').html(`
        <span class='question-score'>Score: ${currentScore}/${questionNumber + 1}</span>`);
};

// creates correct answer feedback html
function correctAnswerFeedback() {
    $('.js-answer-feedback').html(        
        `<div class='correct'>
            <h3>Correct!</h3>
            <h4>The answer is ${STORE[questionNumber].theAnswer}</h4>
            <img class='feedback-img' src=${STORE[questionNumber].correct[0]} alt=${STORE[questionNumber].correct[1]}>
            <p>${STORE[questionNumber].feedback}</p>
        </div>
        <button type='button' class='js-next-button name='next-button' value='Next'>Next</button>
    `);
    console.log('correct answer');
};

// creates incorrect answer feedback html
function incorrectAnswerFeedback() {
    $('.js-answer-feedback').html(        
        `<div class='wrong'>
            <h3>Wrong...</h3>
            <h4>Your answer was ${$('input[type=radio][name=answer-choice]:checked').val()}</h4>
            <h4>It's actually ${STORE[questionNumber].theAnswer}</h4>
            <img class='feedback-img' src=${STORE[questionNumber].incorrect[0]} alt=${STORE[questionNumber].incorrect[1]}>
            <p>${STORE[questionNumber].feedback}</p>
        </div>
        <button type='button' class='js-next-button' name='next-button' value='Next'>Next</button>
    `);
    console.log('incorrect answer');
};



// creates results page html
function resultsPage() {
    return `<div class='try-again'>
                <button type='button' class='js-try-again' name='try-again-button' value='Try Again'>Try Again</button>
            </div>
            <div class='learn-more'>
                <ul class='resources'>
                    <li><a href='nav.html'>Source 1</a></li>
                    <li><a href='nav.html'>Source 2</a></li>
                    <li><a href='nav.html'>Source 3</a></li>
                </ul>
            </div>`
};



// these functions update our earlier constants & template literal strings

// increments question number when called
function questionCounter() {
    questionNumber++;
};

// increments score when called
function scoreCounter() {
    return currentScore++;
};

// creates our first question
function renderFirstQuestion() {
    $('.js-quiz-form').html(createQuestion());
};

// displays the appropriate feedback -- calls HTML from above
function renderCorrectAnswerFeedback() {
    $('.js-answer-feedback').html(correctAnswerFeedback());
};

function renderIncorrectAnswerFeedback() {
    $('.js-answer-feedback').html(incorrectAnswerFeedback());
};

// displays the results page
function renderResultsPage() {
    $('.results').html(resultsPage());
    howDidYouDo();
};

//this function & logic statement adds additional feedback to the results page
function howDidYouDo() {
    if (0 <= currentScore && currentScore <= 3) {
        $('.js-final-feedback').html(`
            <h3>Your final score is ${currentScore}!</h3>
            <img src='https://media.giphy.com/media/5QW76Ww9bquHdg1fTv/giphy.gif' alt='give it another shot'>
            <p>Build up your astrology knowledge, and try again.</p>
        `);
    } else if (4 <= currentScore && currentScore <= 6) {
        $('.js-final-feedback').html(`
            <h3>Your final score is ${currentScore}!</h3>
            <img src='https://media.giphy.com/media/EfdrZTT4sSGY0/giphy.gif' alt='good try'>
            <p>You have a good foundation. Keep learning!</p>
        `);
    } else if (7 <= currentScore && currentScore <= 9) {
        $('.js-final-feedback').html(`
            <h3>Your final score is ${currentScore}!</h3>
            <img src='https://media.giphy.com/media/NInhSPmxCgaxq/giphy.gif' alt='impressive'>
            <p>Great work! You seem to know all about the stars!</p>
        `);
    } else if (currentScore >= 10) {
        $('.js-final-feedback').html(`
            <h3>Your final score is ${currentScore}!</h3>
            <img src='https://media.giphy.com/media/kPHBjnWpTtuDf3LC50/giphy.gif' alt='flawless'>
            <p>Perfect score!!</p>
        `);
    }
}; 

// these functions add event listeners for when to display our earlier functions

// this function takes the DOM from the start page to the first quiz question & shows the numbers
function beginQuiz() {
    $('#js-start-button').click(function() {
        $('#js-start-page').hide();
        $('.js-quiz-form').removeClass('hide');
        renderFirstQuestion();
        numberDisplay();
    });
};

// this function looks for a submitted answer
function submitAnswer() {
    $('.js-quiz-form').on('click', '.quiz-submit', function() {
        event.preventDefault();
        console.log('answered question');

        let selected = $('input[type=radio][name=answer-choice]:checked');
        let answer = selected.val();
        let correctAnswer = `${STORE[questionNumber].theAnswer}`;
        let rightWrong = correctAnswer.includes(answer);
        console.log(rightWrong);

        if (rightWrong == true) {
            console.log('correct');
            $('.js-quiz-form').addClass('hide');
            $('.js-answer-feedback').removeClass('hide');
            renderCorrectAnswerFeedback();
            scoreCounter();
            console.log(`my score is ${currentScore}`);
            numberDisplay();
        } else if (rightWrong == false) {
            console.log('incorrect');
            $('.js-quiz-form').addClass('hide');
            $('.js-answer-feedback').removeClass('hide');
            renderIncorrectAnswerFeedback();
        }
    });
};

// this function moves from feedback to the next question
function renderNextQuestion() {
    $('.js-answer-feedback').on('click', '.js-next-button', function() {
        questionNumber++;
        numberDisplay();
        renderFirstQuestion();
        $('.js-answer-feedback').addClass('hide');
        $('.js-quiz-form').removeClass('hide');
        console.log('new question');
    });
};

// this function restarts the quiz
function tryAgain() {
    $('.js-results-page').on('click', '.js-try-again', function() {
        location.reload();
    });
};

// this function handles the header restart option
function handleRestart() {
    $('header').on('click', '#js-restart-button', function() {
        location.reload();
    });
};

// this final group of functions will initialize the others & add jQuery
function runQuizApp() {
    beginQuiz();
    renderFirstQuestion();
    submitAnswer();
    renderNextQuestion();
    handleRestart();
    console.log('intialized quiz app');
};

$(runQuizApp)