

const jsonData = {
    "chapters": [
        {
            "title": "Chapter 1",
            "questions": [
                {
                    "title": "Question 1",
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
                            "isCorrect": false
                        }
                    ],
                    "multiple": false,
                    "img": undefined,
                    "comment": {
                        "text": "Comment 1",
                        "img": undefined
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
                    "img": "test-img.jpg",
                    "comment": {
                        "text": "Comment 1",
                        "img": "test-img.jpg"
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
            chaptersData: getChapters(this),
            Answers: initAnswers(this),
            msg: '',
            qIsFirst: true,
            qIsLast: false,
            showTip: false,
            titleScreen: true,
            allowTip: true,
            allowCheck: true
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
        },
        lShowResult () {
            this.msg = '';
            showResult(this);
            resetPage(this, true);
        }
    }
}
const app = Vue.createApp(TestO).mount('#app');

function initAnswers(pageO) {
    let answers = [];
    chaptersQ = jsonData.chapters.length;
    for (i = 0; i < chaptersQ; i++) {
        answers.push([]);
        questionsQ = jsonData.chapters[i].questions.length;
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
            pageO.questionIndx = jsonData.chapters[pageO.chapterIndx].questions.length - 1;
        }
    } else if (direction === 1) {
        if (pageO.questionIndx < questionsQ - 1) {
            pageO.questionIndx += 1;
        } else {
            pageO.chapterIndx += 1;
            pageO.questionIndx = 0;
        }
    }
    chaptersQ = jsonData.chapters.length;
    questionsQ = jsonData.chapters[pageO.chapterIndx].questions.length;
    
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
    
    return jsonData.chapters;
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
            (checkAnswerInternal(pageO.chaptersData, answers, pageO.chapterIndx, pageO.questionIndx)) 
            ? "Верно" : "Неверно"
        );    
    }

}

function checkAnswerInternal(chaptersData, answers, chapterIndx, questionIndx) {
    let result = false;
    if (answers.length === 0) {
        result = false;
    } else {
        let isCorrect = 0;
        let allAnswers = chaptersData[chapterIndx].questions[questionIndx].answers;
        let allAnswersLen = allAnswers.length;
        for (let i = 0; i < allAnswersLen; i++) {
            if (allAnswers[i].isCorrect === true && answers.includes(i)) {
                isCorrect += 1;
            }
        }
        result = (isCorrect === answers.length);
    }
    return result;
}

function showResult(pageO) {
    let chaptersQ = jsonData.chapters.length;
    let totalQ = 0;
    let rightAnswers = 0;
    
    for (let i = 0; i < chaptersQ; i++) {
        questionQ = jsonData.chapters[i].questions.length;
        
        for (let j = 0; j < questionQ; j++) {
            let answer = pageO.Answers[i][j];
            rightAnswers += checkAnswerInternal(jsonData.chapters, answer, i, j) ? 1 : 0;
            totalQ += 1;
        }
    }
    pageO.msg = `Всего вопросов: ${totalQ}, правильных ответов: ${rightAnswers}\nПравильных ответов в процентах: ${(rightAnswers / totalQ * 100).toFixed(2)}%`;
}
