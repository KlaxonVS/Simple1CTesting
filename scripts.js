
const TestO = {
    data() {
        return {
            page: 0,
            selectedChapters: [],
            timer: new Date(),
            title: 'TestPage',
            lInput: '',
            chapterIndx: 0,
            questionIndx: 0,
            testData: {},
            msg: '',
            qIsFirst: true,
            qIsLast: false,
            showTip: false,
            titleScreen: true,
            allowTip: true,
            allowCheck: true,
            correctAnswers: [],
            answerElents: [],
            chaptersData: [],
            Answers: [],
            hasTip: false,
        }
    },
    async created() {
			let url = "https://raw.githubusercontent.com/KlaxonVS/Simple1CTesting/refs/heads/main/db.json";
			let response = await fetch(url).then(response => response.json()).catch(err => console.log(err));
			this.testData =  await response;
			this.chaptersData = getChapters(this);
			this.Answers = initAnswers(this);
			
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
            this.checkTip();

        },
        lResetPage () {
            resetPage(this);
        },
        lProcessAnswer(indexC, indexQ, indexA, answer, checked) {
            processAnswer(this, indexC, indexQ, indexA, answer, checked);
        },
        lCheckAnswer () {
            this.correctAnswers = [];
            checkAnswer(this);
            if (this.correctAnswers.length === 0) {
                return;
            }
            let answerEl = document.getElementsByName(`CheckAnswer-${this.chapterIndx}-${this.questionIndx}`);
            for (let i = 0; i < answerEl.length; i++) {
                let el = answerEl[i];
                let chEl = document.getElementById(`Answer-${this.chapterIndx}-${this.questionIndx}-${i}`);
                if (this.correctAnswers.includes(i)) {
                    chEl.classList.add('right-answer');
                } else if (el.checked && !this.correctAnswers.includes(i)) {
                    chEl.classList.add('wrong-answer');
                } else {
                    chEl.classList.contains('right-answer') ? chEl.classList.remove('right-answer') : null;
                    chEl.classList.contains('wrong-answer') ? chEl.classList.remove('wrong-answer') : null;
                }
            }
        },
        lShowResult () {
            this.msg = '';
            showResult(this);
            resetPage(this, true);
            this.chaptersData = getChapters(this);
            this.Answers = initAnswers(this);
        },
        checkTip()  {
            let comment = this.chaptersData[this.chapterIndx].questions[this.questionIndx].comment;
            if (comment.text !== '' || comment.img !== '') {
                this.hasTip = true;
            } else
                this.hasTip = false;
        },
        chooseAnswer(indexC, indexQ, indexA, answer) {
            let answerEl = document.getElementsByName(`CheckAnswer-${indexC}-${indexQ}`);
            for (let i = 0; i < answerEl.length; i++) {
                let el = answerEl[i];
                if (i === indexA) {
                    el.checked = true;
                    processAnswer(this, indexC, indexQ, indexA, answer, true);
                    break;
                }
            } 
        },
        chooseChapter(indexC) {
           let el = document.getElementById(`chapterSelection-item-${indexC}`); 
           if (el === null) {
               return;
           }
           if (el.checked && !this.selectedChapters.includes(indexC)) {
               this.selectedChapters.push(indexC);
           } else if (!el.checked && this.selectedChapters.includes(indexC)) {
              let tmp = [];
              for (i = 0; i < this.selectedChapters.length; i++) {
                  if (this.selectedChapters[i] !== indexC) {
                      tmp.push(this.selectedChapters[i]);
                  }
              }
              this.selectedChapters = tmp;
           }
           
        },
        startTest() {
            if (this.selectedChapters.length > 0) {
                this.chaptersData = getChapters(this);
                this.Answers = initAnswers(this);
            }
            this.titleScreen = false;
        }

    }
}
const app = Vue.createApp(TestO).mount('#app');

function initAnswers(pageO) {
    let answersL = [];
    chaptersQ = pageO.chaptersData.length;
    for (i = 0; i < chaptersQ; i++) {
        answersL.push([]);
        questionsQ = pageO.chaptersData[i].questions.length;
        for (j = 0; j < questionsQ; j++) {
            answersL[i].push([]);
        }
    }
    
    return answersL;

}

function changeQuestion(pageO, direction) {
    if (direction === -1) {
        if (pageO.questionIndx > 0) {
            pageO.questionIndx -= 1;
        } else if (pageO.questionIndx === 0) {
            pageO.chapterIndx -= 1;
            pageO.questionIndx = pageO.chaptersData[pageO.chapterIndx].questions.length - 1;
        }
    } else if (direction === 1) {
        if (pageO.questionIndx < questionsQ - 1) {
            pageO.questionIndx += 1;
        } else {
            pageO.chapterIndx += 1;
            pageO.questionIndx = 0;
        }
    }
    chaptersQ = pageO.chaptersData.length;
    questionsQ = pageO.chaptersData[pageO.chapterIndx].questions.length;
    
    pageO.qIsFirst = (pageO.chapterIndx === 0 && pageO.questionIndx === 0);
    pageO.qIsLast = (pageO.chapterIndx === chaptersQ - 1 && pageO.questionIndx === questionsQ - 1);
}

function resetPage(pageO, resetAnswers = false) {
    pageO.chapterIndx = 0; pageO.questionIndx = 0;
    pageO.qIsFirst = true; pageO.qIsLast = false;
    pageO.Answers = initAnswers(pageO);
    pageO.selectedChapters = [];
    if (resetAnswers === false) {
        pageO.msg = '';
    } else {
        pageO.titleScreen = true;
        pageO.correctAnswers = [];
    }

}

function getChapters(pageO) {
		console.log(pageO.testData);
    if (pageO.selectedChapters.length === 0) {
        return pageO.testData.chapters;
    } else {
        let chaptersL = [];
        pageO.selectedChapters.sort();
        for (i = 0; i < pageO.selectedChapters.length; i++) {
            chaptersL.push(pageO.testData.chapters[pageO.selectedChapters[i]]);
        }
        return chaptersL;
    }
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
    let answersL2 = pageO.Answers[pageO.chapterIndx][pageO.questionIndx];
    pageO.msg = "";
    if (answersL2.length === 0) {
        alert("Нужно выбрать хотя бы один вариант ответа!");
    } else {
        checkAnswerInternal(pageO.chaptersData, answersL2, pageO.chapterIndx, pageO.questionIndx, pageO.correctAnswers);    
    }

}

function checkAnswerInternal(chaptersData, answers, chapterIndx, questionIndx, correctAnswers) {
    let result = false;
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
    let chaptersQ = pageO.chaptersData.length;
    let totalQ = 0;
    let rightAnswers = 0;
    
    for (let i = 0; i < chaptersQ; i++) {
        let questionQ = pageO.chaptersData[i].questions.length;
        
        for (let j = 0; j < questionQ; j++) {
            let answer = pageO.Answers[i][j];
            let correctAnswers = [];
            rightAnswers += checkAnswerInternal(pageO.chaptersData, answer, i, j, correctAnswers) ? 1 : 0;
            totalQ += 1;
        }
    }
    pageO.msg = `Правильных ответов: ${(rightAnswers / totalQ * 100).toFixed(2)}% (${rightAnswers}/${totalQ})`;
}
