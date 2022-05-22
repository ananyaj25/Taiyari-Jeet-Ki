const quizData = [
    
    {
        question: "How many time Raj said Palat in DDLJ",
        a: "5",
        b: "2",
        c: "1",
        d: "3",
        correct: "d",
    },
    {
        question: "Chandni Chopra(Ram's crush) taught which subject in movie Mai hoon na",
        a: "Physics",
        b: "Chemistry",
        c: "Maths",
        d: "Economy",
        correct: "b",
    },
    {
        question: "what's Salman's most popular screen name?",
        a: "Raja",
        b: "Sameer",
        c: "Prem",
        d: "Radhe",
        correct: "c",
    },

    {
        question: "What were the three conditions to become a true blue Ranjhore Ka Rathore?",
        a: "Fight a war, fight for love, and beat up a man",
        b: "Grow a mustache, steal a beautiful girl, and ride a horse",
        c: "Wield a sword, ride a horse, and enter parties on horses",
        d: "Ride a horse, beat someone up, and go to jail.",
        correct: "d",
    },

    {
        question: "Police of how many countries are waiting for DON!?",
        a: "21",
        b: "12",
        c: "11",
        d: "7",
        correct: "c",
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