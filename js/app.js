$(document).ready(function() {
 

/*--- questions ---*/
 var quiz_questions = {
    1: {
        "question": "Question #1: What was the album of the year?",
        "options": {
            1: "To Primp a Butterfly",
            2: "1989",
            3: "Traveller",
            4: "Sound and Color",
        },
        "answer": 2
    },
    2: {
        "question": "Who won best new artist?",
        "options": {
            1: "Sam Smith",
            2: "Tori Kelly",
            3: "James Bay",
            4: "Meghan Trainor",
        },
        "answer": 4
    },
    3: {
        "question": "What was the best dance recording?",
        "options": {
            1: "Where Are U Now",
            2: "Go",
            3: "Never Catch Me",
            4: "Runaway (U&I)",
        },
        "answer": 1
    },
    4: {
        "question": "What won the best Country Album?",
        "options": {
            1: "Montevallo",
            2: "The Blase",
            3: "Traveller",
            4: "Pain Killer",
        },
        "answer": 3
    },
    5: {
        "icon": "male",
        "question": "What won the best R&B song?",
        "options": {
            1: "Really Love",
            2: "Earned it",
            3: "Let it Burn",
            4: "Shame",
        },
        "answer": 1
    },
   }

var question = document.getElementById('question');
var optionsList = document.getElementById('optionsList');
var answerBtn = document.getElementById('answer-btn');

	nextButton.onclick = function() {
    /*itterate through questions*/    
    if(i>allQuestions.length -1){/*go to first when reached last*/
       i=0;       
    }    
    populateQuestion(i);
    i++;
};
	
	
}