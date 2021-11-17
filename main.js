let index = 0;
let results = []

const contentUI = document.querySelector('#content')

const questions = {
    0: {
        question: 'What color is the sky?',
        a1: 'Blue',
        a2: 'Green',
        a3: 'Yellow',
        a4: 'Purple',
        answer: 'Blue'
    },
    1: {
        question: 'What color is grass?',
        a1: 'Blue',
        a2: 'Green',
        a3: 'Yellow',
        a4: 'Purple',
        answer: 'Green' 
    }
}

const main = async () => {
    /* Add dummy question to database */
    Database.create("quiz", questions[0])
    
   contentUI.innerHTML = 
   `<button onClick="next()">Start Quiz</button>`
}

const next = () => {
    contentUI.innerHTML = `
    <h3 class="text-center">${questions[index].question}</h3>
    <form onSubit="next()" class="form">
        <input type="radio" id="${questions[index].a1}" name="answer" value="${questions[index].a1}">
        <label for="html">${questions[index].a1}</label><br>

        <input type="radio" id="${questions[index].a2}" name="answer" value="${questions[index].a2}">
        <label for="html">${questions[index].a2}</label><br>

        <input type="radio" id="${questions[index].a3}" name="answer" value="${questions[index].a3}">
        <label for="html">${questions[index].a3}</label><br>

        <input type="radio" id="${questions[index].a4}" name="answer" value="${questions[index].a4}">
        <label for="html">${questions[index].a4}</label><br>

        <button onClick="checkResults()">Next</button>
    
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
    <button onClick="restart()">Restart</restart>
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

window.addEventListener('DOMContentLoaded', main())

