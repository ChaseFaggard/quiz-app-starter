let index = 0;
let results = []

const contentUI = document.querySelector('#content')

let question = {
    question: '',
    a1: '',
    a2: '',
    a3: '',
    a4: '',
    answer: ''
}

const main = async () => {

    getRecords('quiz')

    //addRecord('quiz', questions[1])
  
    
   contentUI.innerHTML = 
   `<button onClick="next()" class="btn btn-primary my-4">Start Quiz</button>
   <button onClick="addQuestionForm()" class="btn btn-info my-4">Add Question</button>`
}

const next = () => {
    //console.log(questions)
    contentUI.innerHTML = `
    <h4 class="text-center p-3">${questions[index].question}</h4>
    <form onSubit="next()" class="form form-control">
        <input type="radio" id="${questions[index].a1}" name="answer" value="${questions[index].a1}">
        <label for="html">${questions[index].a1}</label><br>

        <input type="radio" id="${questions[index].a2}" name="answer" value="${questions[index].a2}">
        <label for="html">${questions[index].a2}</label><br>

        <input type="radio" id="${questions[index].a3}" name="answer" value="${questions[index].a3}">
        <label for="html">${questions[index].a3}</label><br>

        <input type="radio" id="${questions[index].a4}" name="answer" value="${questions[index].a4}">
        <label for="html">${questions[index].a4}</label><br>

        <button onClick="checkResults()" class="btn btn-success my-4">Next</button>
    
    </form>
    `
    document.querySelector('.form').addEventListener('submit', e => e.preventDefault())
}

const checkResults = () => {
    let answers = document.querySelectorAll('input[name="answer"]')
    let answer
    for(const ans of answers) {
        if(ans.checked) {
            answer = ans.value
            break
        }
    }
    if(answer != undefined) {
        if(answer == questions[index].answer) results[index] = 1
        else results[index] = 0

        if(index == Object.keys(questions).length-1) {
            finish()
        }
        else {
            index++
            next()
        }
    }    
}

const finish = () => {
    contentUI.innerHTML = `
    <h3>Score</h3>
    <h5>${getScore()}</h5>
    <button onClick="restart()" class="btn btn-warning my-4">Restart</restart>
    `
}

const getScore = () => {
    let correct = 0;
    for(let i = 0; i < results.length; i++) {
        if(results[i] == 1) correct++
    }
    return Math.round((correct / results.length) * 100) + '%'
}

const restart = () => {
    index = 0
    results = []
    next()
}

const addQuestionForm = () => {
    contentUI.innerHTML =
    `<form id="addForm" class="form form-control">
        <input type="text" placeholder="questions" name="question" />
        <input type="text" placeholder="answer 1" name="a1" />
        <input type="text" placeholder="answer 2" name="a2" />
        <input type="text" placeholder="answer 3" name="a3" />
        <input type="text" placeholder="answer 4" name="a4" />
        <input type="text" placeholder="Correct answer (Type it the text)" name="answer" />
        <button class="btn btn-warning my-4" onClick="addQuestion()">Add</button>
    </form>`
    document.querySelector('#addForm').addEventListener('submit', e => e.preventDefault())
}

const addQuestion = () => {
    let addForm = document.querySelector('#addForm')
    let formData = new FormData(addForm)
    question.question = formData.get('question')
    question.a1 = formData.get('a1')
    question.a2 = formData.get('a2')
    question.a3 = formData.get('a3')
    question.a4 = formData.get('a4')
    question.answer = formData.get('answer')
    addRecord('quiz', question)
    location.reload()
}

window.addEventListener('DOMContentLoaded', main())

