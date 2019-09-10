'use strict';

const STORE = [
    // this will be our array of objects that store questions, choices, etc.
    {   question:'Which of these is not one of the four elements represented in the western zodiac?',
        options: ['Earth', 'Fire', 'Wind', 'Water'],
        answer: 'Wind',
        img: ['https://media.giphy.com/media/36qkcZW7yp9Ti/giphy.gif', 'zodiac wheel'],
        correct: ['https://media.giphy.com/media/OFIsBxe3v7mKI/giphy.gif', 'happy dog'],
        incorrect: ['https://media.giphy.com/media/l0HlAHBcpZoET6aBy/giphy.gif', 'high wind, flying umbrellas'],
        feedback: 'The four elements represented are Fire, Earth, Air, and Water.'
    },
    {   question:'Which constellation is is represented by the scales and is said to represent balance and harmony?',
        options: ['Aquarius', 'Pisces', 'Libra', 'Aries'],
        answer: 'Libra',
        img: ['https://media.giphy.com/media/65KcVFVlftpA4f4yO7/giphy.gif', 'libra symbol'],
        correct: ['https://media.giphy.com/media/jyusCXYL6FPK1CDdjs/giphy.gif', 'libra constellation'],
        incorrect: ['https://media.giphy.com/media/xT8qBit7YomT80d0M8/giphy.gif', 'unbalanced scales'],
        feedback: 'Libra (September 23 - October 22) strives to create equilibrium. Mahatma Gandhi, John Lennon and Jimmy Carter were all Libras.'
    },
    {   question:'Which of these groups are the fire signs in western astrology?',
        options: ['Aquarius, Libra, Gemini', 'Cancer, Scorpio, Pisces', 'Sagittarius, Leo, Aries', 'Virgo, Taurus, Capricorn'],
        answer: 'Sagittarius, Leo, Aries',
        img: ['https://media.giphy.com/media/2YelwDuXXKSg1GfFvx/giphy.gif', '12 zodiac signs'],
        correct: ['https://media.giphy.com/media/QMkPpxPDYY0fu/giphy.gif', 'fireworks toast'],
        incorrect: ['https://media.giphy.com/media/nrXif9YExO9EI/giphy.gif', 'spongebob fire'],
        feedback: 'Fire signs have a passion for life. They are masters of seizing opportunities.'
    },
    {   question:'What is astrology said to represent?',
        options: ['the way in which the earth’s orbit around the sun in conjunction with various constellations affects personalities and relationships', 'the science of how stars form and relate to each other', 'the idea that events on earth impact stars and planets', 'the belief that there is no relationship between planetary bodies, the atmosphere, and humans'],
        answer: 'the way in which the earth’s orbit around the sun in conjunction with various constellations affects personalities and relationships',
        img: ['https://media.giphy.com/media/l3q2Xl2Rd8wZfMCaI/giphy.gif', 'planets'],
        correct: ['https://media.giphy.com/media/2XrwfijeA6JtS/giphy.gif', 'solar system chart'],
        incorrect: ['https://media.giphy.com/media/quO0X65yj6gw0/giphy.gif', 'not quite, falling cat'],
        feedback: 'There is consistent debate about whether astrology is \"real\" or \"true\". However, there are many who believe in its principles.'
    },
    {   question:'Which ancient civilization is primarily credited with the creation of the 12 zodiac signs we reference today?',
        options: ['the Babylonians', 'the Greeks', 'the Romans', 'the Egyptians'],
        answer: 'the Babylonians',
        img: ['https://media.giphy.com/media/U3PCUoDC3db7NxCoCX/giphy.gif', 'Greek cat'],
        correct: ['https://media.giphy.com/media/OcZp0maz6ALok/giphy.gif', 'Liz Lemon high five'],
        incorrect: ['https://media.giphy.com/media/uVDQEuHab311EvjIKF/giphy.gif', 'not technically'],
        feedback: 'The Babylonians are credited with creating the 12 zodiac signs we use today. However, all of these civilizations contributed to western astrology in various ways.'
    },
    {   question:'What is a “map” of the planets and constellations at a person’s time & place of birth called?',
        options: ['a planet map', 'a birth chart', 'a star chart', 'a birth map'],
        answer: 'a birth chart',
        img: ['https://media.giphy.com/media/S60H9JdcyNlcpGfsAo/giphy.gif', 'birth chart'],
        correct: ['https://media.giphy.com/media/g4LjgClvpwzo8tPVHE/giphy.gif', 'illustrated planets'],
        incorrect: ['https://media.giphy.com/media/85HZdaXZRo4y4/giphy.gif', 'birthday question'],
        feedback: 'A birth chart or natal chart is a map of the placement of the planets at the exact moment someone was born. Astrologists believe that these charts hold the key to understanding someone\'s personality and circumstances.'
    },
    {   question:'Which sign does this symbol represent? This sign is also associated with adventorous free-spirits.',
        options: ['Scorpio', 'Leo', 'Sagittarius', 'Taurus'],
        answer: 'Sagittarius',
        img: ['https://media.giphy.com/media/4PXVVn5iHHjTf2oorg/giphy.gif', 'Sagittarius symbol'],
        correct: ['https://media.giphy.com/media/jVc1vUq8dM1NPPjzCi/giphy.gif', 'Sagittarius constellation'],
        incorrect: ['https://media.giphy.com/media/3Z1pqaxLhl0MQZggKp/giphy.gif', 'archery symbol'],
        feedback: 'The last fire sign in the zodiac, Sagittarius (November 22 - December 21) is represented by the archer. It is known for its constant pursuit of knowledge and adventure.'
    },
    {   question:'Which is the correct match of element & associated traits?',
        options: ['Air: passionate & exuberant', 'Earth: intellectual & curious', 'Fire: practical & grounded', 'Water: intuitive & emotional'],
        answer: 'Water: intuitive & emotional',
        img: ['https://media.giphy.com/media/iez6J0FZgc2TJW0t79/giphy.gif', 'four elements'],
        correct: ['https://media.giphy.com/media/ri8Kb9LOe5Nza/giphy.gif', 'happy elephant in water'],
        incorrect: ['https://media.giphy.com/media/148x4ezZxvpIeA/giphy.gif', 'Kermit drenched'],
        feedback: 'Like water, these signs are fluid. They float between reality and their imagination and are known for their nurturing, empathetic, and artistic nature.'
    },
    {   question:'Which constellation is represented by the goddess of wheat & agriculture?',
        options: ['Aquarius', 'Pisces', 'Virgo', 'Aries'],
        answer: 'Virgo',
        img: ['https://media.giphy.com/media/SiEsjaKkBCStNdYXvV/giphy.gif', 'Virgo symbol'],
        correct: ['https://media.giphy.com/media/q1zsIXcp8N2ne/giphy.gif', 'Leslie Knope Pawnee goddesses'],
        incorrect: ['https://media.giphy.com/media/3Z1pqaxLhl0MQZggKp/giphy.gif', 'wheat hand'],
        feedback: 'Virgos (August 23 - September 22) are perfectionists at heart. An earth sign, their symbol reflects their deep connection to the physical world.'
    },
    {   question:'Which set of characteristics is associated with the Leo sign?',
        options: ['Vivacious, theatrical, passionate', 'Humanitarian, nonconformist, free-spirited', 'Intuitive, compassionate, protective', 'Logical, practical, systematic'],
        answer: 'Vivacious, theatrical, passionate',
        img: ['https://media.giphy.com/media/LTE5DtKtERIU0VVISK/giphy.gif', 'Leo symbol'],
        correct: ['https://media.giphy.com/media/3otPoUGBfbuOgFhcpW/giphy.gif', 'Lion'],
        incorrect: ['https://media.giphy.com/media/7OMOtoKfsR212/giphy.gif', 'cat dressed as a lion'],
        feedback: 'Like other fire signs, Leos (July 23 - August 22) seize opportunities. Represented by the lion, they are natural leaders like Barack Obama, Amelia Earhart, and Neil Armstrong'
    }
];



// the first group of functions creates our start page

function startQuiz() {
    // this function will tell the DOM to start displaying the questions
    // when the user clicks on the 'start' button
};

function handleStartPage() {
    // this will bring all of the start page functions together
    // this function will display our start page
    console.log('show start page');
};



// the next group of functions will display & run the question pages

function questionCounter() {
    // this function will keep track of quiz progress
};

function scoreCounter() {
    // this function will keep track of the # of correct answers vs
    // the current question count
};

function correctAnswerFeedback() {
    // calls for the object to be shown when the answer is correct
};

function incorrectAnswerFeedback() {
    // calls forthe object to be showen when the answer is incorrect
};

function showAnswerFeedback() {
    // this will be an if/else function that displays 'correct' when the
    // answer is correct & displays 'incorrect' if incorrect
};

function submitAnswer() {
    // this function displays showAnswerFeedback when a user submits their
    // response using a radio button
};

function quizPageLoop() {
    // this function will be a logical function that displays questions for
    // the length of the STORE array when the 'next' button is clicked
};

function handleQuizPage() {
    // this will bring all of the quiz page functions together
    // it will include the question/answer form & feedback functions
    console.log('show quiz page');
};


// this group of functions will display the results page upon quiz completion

function resultsFeedbackOptions() {
    // this function will be a group of if/else statements
    // it will display different images depending on the number
    // of correct questions
    // ranges: 0-3, 4-6, 7-9, 10
};

function tryAgain() {
    // this function will go back to the start of the quiz & reset the DOM
    // DO NOT use the .reload() method
    console.log('run back to start');
};

function handleResultsPage() {
    // this function brings all of the results page functions together
    console.log('show results page');
};

// this final group of functions will initialize the others & add jQuery
function initJQuery() {
    handleStartPage();
    handleQuizPage();
    handleResultsPage();
    console.log('intialized jQuery');
};

$(initJQuery)