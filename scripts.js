const TestDataSrc = {
    "chapters": [
        {
            "title": "Общие механизмы, понятия и термины.",
            "questions": [
                {
                    "title": "В какое значение можно установить свойство \"Серии кодов\" объекта конфигурации \"Справочник\"?",
                    "answers": [
                        {
                            "text": "Во всем справочнике",
                            "isCorrect": true
                        },
                        {
                            "text": "В пределах подчинения",
                            "isCorrect": false
                        },
                        {
                            "text": "В пределах подчинения владельцу",
                            "isCorrect": false
                        },
                        {
                            "text": "Варианты 1 и 2",
                            "isCorrect": false
                        },
                        {
                            "text": "Верны все указанные ответы",
                            "isCorrect": true
                        }
                    ],
                    "multiple": false,
                    "img": null,
                    "comment": {
                        "text": "Comment 1",
                        "img": null
                    }
                },
                {
                    "title": "Question 2",
                    "answers": [
                        {
                            "text": "Answer 1",
                            "isCorrect": true
                        },
                        {
                            "text": "Answer 2",
                            "isCorrect": false
                        },
                        {
                            "text": "Answer 3",
                            "isCorrect": true
                        }
                    ],
                    "multiple": true,
                    "img": "images/test-img.jpg",
                    "comment": {
                        "text": "Comment 1",
                        "img": "images/test-img.jpg"
                    }
                }
            ]
        }
    ]
}

const TestO = {
    data() {
        return {
            page: 0,
            timer: new Date(),
            title: 'TestPage',
            lInput: '',
            chapterIndx: 0,
            questionIndx: 0,
            testData: TestDataSrc,
            msg: '',
            qIsFirst: true,
            qIsLast: false,
            showTip: false,
            titleScreen: true,
            allowTip: true,
            allowCheck: true,
            correctAnswers: [],
            answerElents: [],
            chaptersData: getChapters(this),
            Answers: initAnswers(this)
        }
    },
    methods: {
        lChangeQuestion (direction) {
            tmpC = this.chapterIndx;
            tmpQ = this.questionIndx;
            changeQuestion(this, direction);
            if (tmpC != this.chapterIndx || tmpQ != this.questionIndx) {
                this.msg = '';
            }
            this.showTip = false;
        },
        lResetPage () {
            resetPage(this);
        },
        lProcessAnswer(indexC, indexQ, indexA, answer, checked) {
            processAnswer(this, indexC, indexQ, indexA, answer, checked);
        },
        lCheckAnswer () {
            checkAnswer(this);
            if (this.correctAnswers.length === 0) {
                return;
            }
            let answerEl = document.getElementsByName(`CheckAnswer-${this.chapterIndx}-${this.questionIndx}`);
            console.log(answerEl);
            for (let i = 0; i < answerEl.length; i++) {
                let el = answerEl[i];
                let chEl = document.getElementById(`Answer-${this.chapterIndx}-${this.questionIndx}-${i}`);
                if (this.correctAnswers.includes(i)) {
                    chEl.classList.add('right-answer');
                } else if (el.checked && !this.correctAnswers.includes(i)) {
                    chEl.classList.add('wrong-answer');
                } else {
                    chEl.classList.remove('right-answer');
                    chEl.classList.remove('wrong-answer');
                }
            }
        },
        lShowResult () {
            this.msg = '';
            showResult(this);
            resetPage(this, true);
        },
        getJsonData() {
            let responseData;
            fetch('./testing.json', { method: 'GET', mode: 'no-cors' }).then(
                response => { responseData = response.json() } ).catch(
                    error => console.error('Error:', error)).then(
                        data => {
                            console.log(data);
                        });
                        
            return responseData;
        }
    }
}
const app = Vue.createApp(TestO).mount('#app');

function initAnswers(pageO) {
    let answers = [];
    chaptersQ = pageO.testData.chapters.length;
    for (i = 0; i < chaptersQ; i++) {
        answers.push([]);
        questionsQ = pageO.testData.chapters[i].questions.length;
        for (j = 0; j < questionsQ; j++) {
            answers[i].push([]);
        }
    }
    
    return answers;

}

function changeQuestion(pageO, direction) {
    if (direction === -1) {
        if (pageO.questionIndx > 0) {
            pageO.questionIndx -= 1;
        } else if (pageO.questionIndx === 0) {
            pageO.chapterIndx -= 1;
            pageO.questionIndx = testData.chapters[pageO.chapterIndx].questions.length - 1;
        }
    } else if (direction === 1) {
        if (pageO.questionIndx < questionsQ - 1) {
            pageO.questionIndx += 1;
        } else {
            pageO.chapterIndx += 1;
            pageO.questionIndx = 0;
        }
    }
    chaptersQ = pageO.testData.chapters.length;
    questionsQ = pageO.testData.chapters[pageO.chapterIndx].questions.length;
    
    pageO.qIsFirst = (pageO.chapterIndx === 0 && pageO.questionIndx === 0);
    pageO.qIsLast = (pageO.chapterIndx === chaptersQ - 1 && pageO.questionIndx === questionsQ - 1);
}

function resetPage(pageO, resetAnswers = false) {
    pageO.chapterIndx = 0; pageO.questionIndx = 0;
    pageO.qIsFirst = true; pageO.qIsLast = false;
    pageO.Answers = initAnswers(pageO);
    if (resetAnswers === false) {
        pageO.msg = '';
    } else {
        pageO.titleScreen = true;
    }

}

function getChapters(pageO) {
    pageO.testData = TestDataSrc;
    return pageO.testData.chapters;
}

function getJsonData() {
    let responseData;
    fetch('./tmpjson.json').then(
        response => { responseData = response.json() } ).catch(
            error => console.error('Error:', error)).then(
                data => {
                    console.log(data);
                });
                
    return responseData;
}

function processAnswer(pageO, indexC, indexQ, indexA, answer, checked) {
    
    let multy = pageO.chaptersData[indexC].questions[indexQ].multiple;
    if (multy === false) {  
        pageO.Answers[indexC][indexQ] = [];
        if (checked === true) {
            pageO.Answers[indexC][indexQ].push(indexA);
        }
    } else {
        inArray = pageO.Answers[indexC][indexQ].includes(indexA);
        if (inArray === true && checked === false) {
            let tmp = [];
            for (i = 0; i < pageO.Answers[indexC][indexQ].length; i++) {
                if (pageO.Answers[indexC][indexQ][i] !== indexA) {
                    tmp.push(pageO.Answers[indexC][indexQ][i]);
                }
            }
            pageO.Answers[indexC][indexQ] = tmp;

        } else if (inArray === false && checked === true) {
            pageO.Answers[indexC][indexQ].push(indexA);
        }

    }
    
}

function checkAnswer(pageO) {
    let answers = pageO.Answers[pageO.chapterIndx][pageO.questionIndx];
    pageO.msg = "";
    if (answers.length === 0) {
        pageO.msg = "Нужно выбрать хотя бы один вариант ответа";
    } else {
        pageO.msg = (
            (checkAnswerInternal(pageO.chaptersData, answers, pageO.chapterIndx, pageO.questionIndx, pageO.correctAnswers)) 
            ? "Верно" : "Неверно"
        );    
    }

}

function checkAnswerInternal(chaptersData, answers, chapterIndx, questionIndx,correctAnswers = undefined) {
    let result = false;
    if (correctAnswers === undefined) {
        correctAnswers = [];
    }
    if (answers.length === 0) {
        result = false;
    } else {
        let isCorrect = 0;
        let allAnswers = chaptersData[chapterIndx].questions[questionIndx].answers;
        let allAnswersLen = allAnswers.length;
        for (let i = 0; i < allAnswersLen; i++) {
            if (allAnswers[i].isCorrect) {
                correctAnswers.push(i);
            }
            if (allAnswers[i].isCorrect === true && answers.includes(i)) {
                isCorrect += 1;
            }
        }
        result = (isCorrect === answers.length);
    }
    return result;
}

function showResult(pageO) {
    let chaptersQ = pageO.testData.chapters.length;
    let totalQ = 0;
    let rightAnswers = 0;
    
    for (let i = 0; i < chaptersQ; i++) {
        questionQ = pageO.testData.chapters[i].questions.length;
        
        for (let j = 0; j < questionQ; j++) {
            let answer = pageO.Answers[i][j];
            rightAnswers += checkAnswerInternal(pageO.testData.chapters, answer, i, j) ? 1 : 0;
            totalQ += 1;
        }
    }
    pageO.msg = `Правильных ответов: ${(rightAnswers / totalQ * 100).toFixed(2)}% (${rightAnswers}/${totalQ})`;
}
