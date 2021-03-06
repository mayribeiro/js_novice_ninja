//alert("Welcome to Quiz Ninja!"); Cap 01

/** Cap 02
var question = "What is Superman's real name?"
var answer = prompt(question);
alert("You answered " + answer); **/

/** 
var quiz = [
    ["What is Superman's real name?", "Clarke Kent"],
    ["What is Wonderwoman's real name?", "Dianna Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]]; */
quiz = {
    "name": "Super Hero Name Quiz",
    "description": "How many super heroes can you name?",
    "question": "What is the real name of ",
    "questions": [
        { "question": "Superman", "answer": "Clarke Kent" },
        { "question": "Batman", "answer": "Bruce Wayne" },
        { "question": "Wonder Woman", "answer": "Dianna Prince" }
    ]
}

console.log(quiz);

var score = 0;

play(quiz);

function play(quiz) {
    // main game loop
    for (var i = 0, question, answer, max = quiz.questions.length; i < max; i++) {
        question = quiz.questions[i].question;
        answer = ask(question);
        check(answer);
    }
    // end of main game loop
    gameOver();
}

function ask(question) {
    update($question, quiz.question + question)
    return prompt("Enter your answer:"); // quiz[i][0] is the ith questions
}

function check(answer) {
    if (answer === quiz.questions[i].answer) { // quiz[i][1] is the ith answer
        update($feedback, "Correct!", "right");
        alert("Correct!");
        // increase score by 1
        score++;
        update($score, score);
    } else {
        update($feedback,"Wrong!","wrong");
    }
}

function gameOver() {
    update($question,"Game Over, you scored " + score + " points");
}

/** 
for (var i = 0, max = quiz.length; i < max; i++) {
        // get answer from user
        var answer = prompt(quiz[i][0]); // quiz[i][0] is the ith question
        // check if answer is correct
        if (answer === quiz[i][1]) { // quiz[i][1] is the ith answer
            alert("Correct!");
            // increase score by 1
            score++;
        } else {
            alert("Wrong!");
        }
}*/

//alert("Game Over, you scored " + score + " points");

//DOM REF...
//Para referenciar os elementos do DOM usamos o $ como prefixo da variavel

var $question = document.getElementById("question");
var $score = document.getElementById("score");
var $feedback = document.getElementById("feedback");

function update(element, content,  kclass) {
    var p = element.firstChild || document.createElement("p");
    p.textContent = content;
    element.appendChild(p);
    if (kclass) {
        p.className = kclass;
    }
}

update($score, score);
