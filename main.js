let index = 0;
let results = []

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
    //let item = await Database.get("quiz", 1)
    //console.log(item)
    
    next()
}

const next = () => {
    document.querySelector('#question').innerHTML = `
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
    if(answer == questions[index].answer) console.log("Correct")
    else console.log("Wrong")

    index++

    next()
}




window.addEventListener('DOMContentLoaded', main())

