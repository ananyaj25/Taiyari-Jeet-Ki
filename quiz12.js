const quizData = [
    
    {
        question: "The one Doremon always tried to date",
        a: "Dorami",
        b: "Michan",
        c: "Shizuka",
        d: "none of the above",
        correct: "b",
    },
    
    
    {
        question: "How many hair strands hagemaru had?",
        a: "0",
        b: "1",
        c: "3",
        d: "5",
        correct: "c",
    },
    {
        question: "Tell the odd one out.",
        a: "Gian",
        b: "Butagorira",
        c: "Korosuke",
        d: "Kalia",
        correct: "c",
    },

    {
        question: "Name the famous restaurant in Phineas and Ferb",
        a: "Burger Shack",
        b: "Mr Slushy Burger",
        c: "Krusty Krab",
        d: "Hot Dog Bush",
        correct: "b",
    },

    {
        question: "Sanju from Shaka laka boom boom traveveled to which year? ",
        a: "2056",
        b: "2208",
        c: "2022",
        d: "2534",
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