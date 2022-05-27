const quizData = [
    
    {
        question: "Meri shaktiyo ka glt istemal kiya gya hai maa!",
        a: "Rohit",
        b: "Rohan",
        c: "Raj",
        d: "Krishna",
        correct: "a",
    },
    
    {
        question: "Tension lene ka nahi sirf dene ka is a diague of which movie        ",
        a: "3 idiots",
        b: "Munna Bhai MBBS",
        c: "Hera pheri",
        d: "Rang De Basanti",
        correct: "b",
    },
    
    {
        question: "Which character from MOHABATTEIN said the famous parampara, pratishtha,anushasan dialogue?",
        a: "Naresh Malhotra",
        b: "Narayan Malhotra",
        c: "Naresh Shankar",
        d: "Narayan Shankar",
        correct: "d",
    },

    {
        question: "Tell the one word that fills all three blanks —-------pe —--- milti rahi hai lekin insaaf nahi milta, my Lord. Milte hai to sirf —---- ",
        a: "Nirasha",
        b: "Tareekh",
        c: "Gulami",
        d: "Khushi",
        correct: "b",
    },
    

    {
        question: " 'Mere paas maa hai' is an iconic dialgue of which movie ?",
        a: "Sholay",
        b: "Zanzeer",
        c: "Deewar",
        d: "Agnipath ",
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