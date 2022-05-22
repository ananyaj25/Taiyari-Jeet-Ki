const quizData = [
    
    {
        question: "Kaun banega crorepati was first aired in the year?        ",
        a: "2001",
        b: "2002",
        c: "2000",
        d: "2003",
        correct: "c",
    },
    {
        question: " What is Shararat show's full name? Shararat -",
        a: "Thoda jaadu, thodi gadbad",
        b: "Thoda jaadu, thodi Nazaakat",
        c: "Thoda jaadu, thodi Harkat",
        d: "Thoda jaadu, thodi Rehmat",
        correct: "b",
    },
    {
        question: " What was Shaktiman's real name in show? ",
        a: "Tamraj Kilvish",
        b: "Tony Bhia",
        c: "Gangadhar",
        d: "Durandhar",
        correct: "c",
    },

    {
        question: " Aahat was telecast on which channel?",
        a: "Colors",
        b: "Sony",
        c: "Star Plus",
        d: "Zee Tv.",
        correct: "d",
    },

    {
        question: "what  MAD's artist name?",
        a: "Neil",
        b: "Mandy",
        c: "Rob",
        d: "Lloyd",
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