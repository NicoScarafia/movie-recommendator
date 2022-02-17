const divQuiz = document.querySelector('#quiz_container')
const divLevels = document.querySelector('#levels_container')
const divQuestion = document.querySelector('#question_container')

const startButton = document.querySelector('#start_button')
startButton.addEventListener('click', start)

const restartButton = document.querySelector('#restart_button')

const divScore = document.querySelector('.score')
const score = document.querySelector('#score')
let scoreValue = 0
score.innerHTML = scoreValue

let currentQuestionIndex = 0


function start() {

    startButton.classList.add('hide')
    divLevels.classList.remove('hide')
    divScore.classList.remove('hide')

    const easyButton = document.querySelector('#easy')
    const mediumButton = document.querySelector('#medium')
    const hardButton = document.querySelector('#hard')

    easyButton.addEventListener('click', () => {
        createQuestion('easy')
        divQuestion.classList.remove('hide')
        divLevels.classList.add('hide')
    })

    mediumButton.addEventListener('click', () => {
        createQuestion('medium')
        divQuestion.classList.remove('hide')
        divLevels.classList.add('hide')
    })

    hardButton.addEventListener('click', () => {
        createQuestion('hard')
        divQuestion.classList.remove('hide')
        divLevels.classList.add('hide')
    })
}


function createQuestion(difficulty) {

    fetch(`https://opentdb.com/api.php?amount=10&category=11&difficulty=${difficulty}&type=multiple`)

        .then(response => response.json())

        .then(data => {

            const dataResults = data.results

            function showQuestion() {

                // pone la respuesta correcta en una posición aleatoria dentro del array de respuestas posibles
                let correctAnswer = dataResults[currentQuestionIndex].correct_answer
                let incorrectAnswers = dataResults[currentQuestionIndex].incorrect_answers
                let allOptions = incorrectAnswers
                allOptions.splice(Math.floor(Math.random() * incorrectAnswers.length + 1), 0, correctAnswer)

                // creación del dom

                const template = document.querySelector('.template-quiz').content
                const fragment = document.createDocumentFragment()

                template.querySelector('.question').textContent = dataResults[currentQuestionIndex].question
                template.querySelector('.question-number').textContent = `${currentQuestionIndex + 1}/10`

                let $option1 = template.querySelector('.option1')
                let $option2 = template.querySelector('.option2')
                let $option3 = template.querySelector('.option3')
                let $option4 = template.querySelector('.option4')

                $option1.textContent = allOptions[0]
                $option2.textContent = allOptions[1]
                $option3.textContent = allOptions[2]
                $option4.textContent = allOptions[3]

                let clone = document.importNode(template, true)
                fragment.appendChild(clone)

                divQuestion.appendChild(fragment);

                // comparacion de la respuesta correcta / incorrecta

                let boton1 = document.querySelector('#option1')
                let boton2 = document.querySelector('#option2')
                let boton3 = document.querySelector('#option3')
                let boton4 = document.querySelector('#option4')
                let botones = [boton1, boton2, boton3, boton4]

                botones.forEach( (b) => {
                    b.addEventListener('click', () => {
                        if (b.textContent == correctAnswer) {
                            scoreValue++
                            score.innerHTML = scoreValue
                            currentQuestionIndex++
                            nextQuestion()
                        } else {
                            currentQuestionIndex++
                            nextQuestion()
                        }
                    })
                })
            }

            showQuestion(dataResults[currentQuestionIndex])

            function nextQuestion() {

                while (divQuestion.firstChild) {
                    divQuestion.removeChild(divQuestion.firstChild);
                }

                if (currentQuestionIndex < dataResults.length) {
                    showQuestion(dataResults[currentQuestionIndex])
                } else {
                    finalScore()
                }

            }

            function finalScore() {
                divScore.classList.add('hide')
                divQuestion.innerHTML = `<h3>GAME OVER</h3> 
                                         <p class="final-score">Final Score: ${scoreValue}/10</p>`

                if (scoreValue == 10) {
                    divQuestion.innerHTML = `<div class="perfect-score"> 
                                                <h3>GAME OVER</h3> 
                                                <p class="final-score">Final Score: ${scoreValue}/10 <br> PERFECT!!!</p>
                                                <img style="width: 12rem; margin-bottom: 3rem" src="assets/img/chuck-approves.jpg">
                                            </div>`
                }

                restartButton.classList.remove('hide')
            }
        })
}


restartButton.addEventListener('click', () => location.reload())



