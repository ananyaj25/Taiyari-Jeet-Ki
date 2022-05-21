const quizData = [
    {
        question: "What was the name of spongebob's squirrel friend?",
        a: "Patrick",
        b: "Squidward",
        c: "Mrs Puff",
        d: "Sandy",
        correct: "d",
    },
    {
        question: "What was the real name of Hero from HERO:bhakti hi shakti hai",
        a: "Rohit",
        b: "Joy",
        c: "Chota pappi",
        d: "Avi",
        correct: "b",
    },
    {
        question: "what's the name of Shinchan's favorite didi?",
        a: "Mitsi",
        b: "Yoshinaga",
        c: "Naneko",
        d: "Ichan",
        correct: "c",
    },

    {
        question: "Name the creepy barber's name in the show courage the cowardly dog",
        a: "Oak",
        b: "Fred",
        c: "RON",
        d: "Jen",
        correct: "b",
    },

    {
        question: "Name the green dragon of the two conjoined twin dragons from dragon tales",
        a: "ord",
        b: "Zak",
        c: "Wheezie",
        d: "Max",
        correct: "b",
    },

    

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})