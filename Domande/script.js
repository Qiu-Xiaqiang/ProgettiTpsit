// Durata totale del timer in secondi (60 minuti)
const TOTAL_TIME = 3600;

// Verifica se il timer è stato inizializzato in localStorage
if (!localStorage.getItem('startTime')) {
    localStorage.setItem('startTime', Date.now()); // Salva il timestamp iniziale
}

// Funzione per aggiornare il timer
function updateTimer() {
    const startTime = parseInt(localStorage.getItem('startTime'), 10); // Tempo di inizio
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000); // Secondi trascorsi
    const timeLeft = TOTAL_TIME - elapsedTime; // Tempo residuo in secondi

    if (timeLeft <= 0) {
        document.getElementById('timer').textContent = "Tempo scaduto!";
        alert("Il tempo è scaduto!");
        clearInterval(timerInterval); // Ferma l'aggiornamento del timer
        return;
    }

    // Calcola minuti e secondi
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    // Aggiorna il contenuto del timer
    document.getElementById('timer').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Esegui l'aggiornamento del timer ogni secondo
const timerInterval = setInterval(updateTimer, 1000);

// Mostra il timer appena la pagina viene caricata
document.addEventListener('DOMContentLoaded', updateTimer);

// ** Domande aperte **
const questions2 = [
    {
        text: "1. Descrivi come funziona un sistema operativo multitasking:",
    },
    {
        text: "2. Qual è la differenza tra memoria RAM e memoria ROM?",
    },
    {
        text: "3. Cos'è una rete di computer e quali sono le sue componenti principali?",
    },
];

// Variabili globali per domande aperte
let currentQuestionIndex2 = 0;
let answers2 = []; // Per memorizzare le risposte

// Elementi del DOM per domande aperte
const questionText2 = document.getElementById("question-text");
const answerText2 = document.getElementById("answer-text");
const nextButton2 = document.getElementById("next-button");
const finishButton2 = document.getElementById("finish-button");

// Carica una domanda aperta
function loadQuestion2() {
    const question = questions2[currentQuestionIndex2];
    questionText2.textContent = question.text;
    answerText2.value = ""; // Pulisce la risposta precedente

    // Nascondi il pulsante "Procedi" se siamo all'ultima domanda
    if (currentQuestionIndex2 === questions2.length - 1) {
        nextButton2.style.display = "none";
        finishButton2.style.display = "block";
    } else {
        nextButton2.style.display = "block";
        finishButton2.style.display = "none";
    }
}

// Salva la risposta dell'utente
function saveAnswer2() {
    answers2[currentQuestionIndex2] = answerText2.value;
}

// Gestione pulsante "Procedi" (domande aperte)
nextButton2.addEventListener("click", () => {
    saveAnswer2();
    currentQuestionIndex2++;
    if (currentQuestionIndex2 < questions2.length) {
        loadQuestion2();
    }
});

// Gestione pulsante "Termina il Test" (domande aperte)
finishButton2.addEventListener("click", () => {
    saveAnswer2();
    alert("Test terminato! Le tue risposte sono state ricevute.");
    location.href = "index.html"; // Torna alla home
});

// ** Domande a crocette **
const questions1 = [
    {
        text: "1. Qual è la funzione principale della RAM?",
        options: [
            "Memorizzare permanentemente i dati",
            "Elaborare i dati",
            "Fornire spazio di archiviazione",
            "Memorizzare temporaneamente i dati"
        ],
        correct: 3, // Indice della risposta corretta
    },
    {
        text: "2. Cos'è un indirizzo IP?",
        options: [
            "Un identificativo unico di una rete",
            "Un indirizzo fisico di una macchina",
            "Un tipo di memoria",
            "Un sistema operativo"
        ],
        correct: 0,
    },
    {
        text: "3. Quale dei seguenti è un linguaggio di programmazione?",
        options: [
            "Windows",
            "C++",
            "Photoshop",
            "Chrome"
        ],
        correct: 1,
    },
];

// Variabili globali per domande a crocette
let currentQuestionIndex1 = 0;
let answers1 = []; // Per memorizzare le risposte a crocette

// Elementi del DOM per domande a crocette
const questionText1 = document.getElementById("question-text");
const answersContainer1 = document.getElementById("answers-container");
const nextButton1 = document.getElementById("next-button");
const finishButton1 = document.getElementById("finish-button");

// Carica una domanda a crocette
function loadQuestion1() {
    const question = questions1[currentQuestionIndex1];
    questionText1.textContent = question.text;
    answersContainer1.innerHTML = ""; // Pulisce le opzioni precedenti

    // Crea le opzioni
    question.options.forEach((option, index) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "question";
        input.value = index;
        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        answersContainer1.appendChild(label);
    });

    // Nascondi il pulsante "Procedi" se siamo all'ultima domanda
    if (currentQuestionIndex1 === questions1.length - 1) {
        nextButton1.style.display = "none";
        finishButton1.style.display = "block";
    } else {
        nextButton1.style.display = "block";
        finishButton1.style.display = "none";
    }
}

// Salva la risposta dell'utente (domande a crocette)
function saveAnswer1() {
    const selectedOption = document.querySelector('input[name="question"]:checked');
    if (selectedOption) {
        answers1[currentQuestionIndex1] = parseInt(selectedOption.value);
    }
}

// Calcola il punteggio
function calculateScore() {
    let score = 0;
    questions1.forEach((question, index) => {
        if (answers1[index] === question.correct) {
            score++;
        }
    });
    return score;
}

// Gestione pulsante "Procedi" (domande a crocette)
nextButton1.addEventListener("click", () => {
    saveAnswer1();
    currentQuestionIndex1++;
    if (currentQuestionIndex1 < questions1.length) {
        loadQuestion1();
    }
});

// Gestione pulsante "Termina il Test" (domande a crocette)
finishButton1.addEventListener("click", () => {
    saveAnswer1();
    const score = calculateScore(); // Calcola il punteggio
    alert(`Test terminato! Il tuo punteggio è: ${score} su ${questions1.length}`);
    location.href = "index.html"; // Torna alla home
});

// Inizializza il test a crocette
loadQuestion1();
