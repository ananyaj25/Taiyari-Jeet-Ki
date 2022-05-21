const quizData = [
    
    {
        question: "Name the naughtiest kid of Singh Parivar from show Best Of Luck Nikki ",
        a: "Popi",
        b: "Rohan",
        c: "Sunny",
        d: "Ritesh",
        correct: "c",
    },
    
    {
        question: "tell the popular dialogue of team rocket from Pokemon when they fail their mission ",
        a: "Team Rocket fir aayegi",
        b: "Team Rocket tumhein chodegi nhi",
        c: "Team Rocket ek baar firse haar gayi",
        d: "Team Rocket humari lambi hai height ",
        correct: "c",
    },
    
    {
        question: "name the redheaded girl whom Richie Rich has a crush on.",
        a: "Gloria Glad",
        b: "Candy mint",
        c: "Velma Dinkley",
        d: "Minnie",
        correct: "a",
    },

    {
        question: "What was Oswald's dog shaped like?",
        a: "Crescent roll",
        b: "Hot Dog",
        c: "Taco",
        d: "Burger",
        correct: "b",
    },
    

    {
        question: "With whome Dexter has a bitter rivalry with in the show Dexter's Lab ?",
        a: "Herbert",
        b: "Omar",
        c: "Richard",
        d: "Mandark ",
        correct: "d",
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