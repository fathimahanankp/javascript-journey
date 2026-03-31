let questions = [
    {
        q: "What is the capital of France?",
        a: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
    },
    {
        q: "Capital of India?",
        a: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
        correct: 0
    },
    {
        q: "Capital of USA?",
        a: ["New York", "Washington D.C.", "Los Angeles", "Chicago"],
        correct: 1
    }
];

let current = 0;
let score = 0;
let time = 10;
let timer;

function loadQuestion() {
    let q = questions[current];
    document.getElementById("question").innerText = q.q;

    let answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.a.forEach((option, index) => {
        let btn = document.createElement("button");
        btn.innerText = option;

        btn.onclick = function () {
            checkAnswer(index, btn);
        };

        answersDiv.appendChild(btn);
    });

    startTimer();
}

function checkAnswer(index, btn) {
    let correctIndex = questions[current].correct;

    if (index === correctIndex) {
        btn.classList.add("correct");
        score++;
    } else {
        btn.classList.add("wrong");
    }

    clearInterval(timer);
}


function nextQuestion() {
    current++;
    if (current >= questions.length) {
        document.querySelector(".container").innerHTML = "<h2>Your Score: " + score + "</h2>";
        return;
    }

    loadQuestion();
}

function startTimer() {
    time = 10;
    document.getElementById("timer").innerText = "Time: " + time + "s";

    timer = setInterval(() => {
        time--;
        document.getElementById("timer").innerText = "Time: " + time + "s";

        if (time <= 0) {
            clearInterval(timer);
        
        }
    }, 1000);
}

loadQuestion();