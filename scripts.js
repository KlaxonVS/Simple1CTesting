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
                            "isCorrect": false
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
                    "img": "",
                    "comment": {
                        "text": "",
                        "img": ""
                    }
                },
                {
                    "title": "В каком объекте производится редактирование информации пользователем (например экземпляра документа)?",
                    "answers": [
                        {
                            "text": "Объект конфигурации",
                            "isCorrect": false
                        },
                        {
                            "text": "Объект встроенного языка",
                            "isCorrect": false
                        },
                        {
                            "text": "Объект информационной базы",
                            "isCorrect": true
                        },
                        {
                            "text": "Форма объекта",
                            "isCorrect": false
                        },
                        {
                            "text": "Форма списка",
                            "isCorrect": false
                        },
                        {
                            "text": "Варианты 4 и 5",
                            "isCorrect": false
                        },
                    ],
                    "multiple": false,
                    "img": "",
                    "comment": {
                        "text": "",
                        "img": ""
                    }
                },
                {
                    "title": "В механизме полнотекстового поиска для поиска с учетом синонимов слова 'алый' используется выражение:",
                    "answers": [
                        {
                            "text": "!алый",
                            "isCorrect": true
                        },
                        {
                            "text": "'алый'",
                            "isCorrect": false
                        },
                        {
                            "text": "(алый)",
                            "isCorrect": false
                        },
                        {
                            "text": "\"алый\"",
                            "isCorrect": false
                        }
                    ],
                    "multiple": false,
                    "img": "",
                    "comment": {
                        "text": "",
                        "img": "testData/1-3_tip.png"
                    }
                },
                {
                    "title": "Внешние обработки используются:",
                    "answers": [
                        {
                            "text": "На стадии отладки, для более быстрого внесения изменений в обработку",
                            "isCorrect": false
                        },
                        {
                            "text": "Для разграничения прав доступа к обработке",
                            "isCorrect": false
                        },
                        {
                            "text": "Для возможности редактирования/изменения функциональности обработки пользователем в режиме 1С:Предприятие",
                            "isCorrect": false
                        },
                        {
                            "text": "Для реализации функциональности, не поставляемой с основной конфигурацией",
                            "isCorrect": false
                        },
                        {
                            "text": "Варианты 1 и/или 3",
                            "isCorrect": false
                        },
                        {
                            "text": "Варианты 1 и/или 4",
                            "isCorrect": true
                        }
                    ],
                    "multiple": false,
                    "img": "",
                    "comment": {
                        "text": "",
                        "img": ""
                    }
                },
                {
                    "title": "Выберите верный набор ассоциаций \"Сущность системы\" - \"тип файла\":",
                    "answers": [
                        {
                            "text": "внешняя обработка -\"epf\", внешний отчет – \"erf\", конфигурация – \"сf\"",
                            "isCorrect": true
                        },
                        {
                            "text": "внешняя обработка -\"ert\", внешний отчет – \"mxl\", конфигурация – \"pfl\"",
                            "isCorrect": false
                        },
                        {
                            "text": "внешняя обработка -\"ert\", внешний отчет – \"erf\", конфигурация – \"сfu\"",
                            "isCorrect": false
                        },
                        {
                            "text": "внешняя обработка -\"epf\", внешний отчет – \"mxl\", конфигурация – \"сfu\"",
                            "isCorrect": false
                        },
                        {
                            "text": "внешняя обработка -\"epf\", внешний отчет – \"erf\", конфигурация – \"1CD\"",
                            "isCorrect": false
                        }
                    ],
                    "multiple": false,
                    "img": "",
                    "comment": {
                        "text": "",
                        "img": ""
                    }
                },
                {
                    "title": "Внешняя обработка может быть включена в состав конфигурации:",
                    "answers": [
                        {
                            "text": "Как отчет",
                            "isCorrect": false
                        },
                        {
                            "text": "Как обработка",
                            "isCorrect": false
                        },
                        {
                            "text": "Варианты 1 и 2",
                            "isCorrect": true
                        },
                        {
                            "text": "Варианты 1 и 2 (но возможна потеря функциональности)",
                            "isCorrect": false
                        }
                    ],
                    "multiple": false,
                    "img": "",
                    "comment": {
                        "text": "",
                        "img": ""
                    }
                },
                {
                    "title": "Внешний отчет может быть включен в состав конфигурации:",
                    "answers": [
                        {
                            "text": "Как отчет",
                            "isCorrect": false
                        },
                        {
                            "text": "Как обработка",
                            "isCorrect": false
                        },
                        {
                            "text": "Варианты 1 и 2",
                            "isCorrect": false
                        },
                        {
                            "text": "Варианты 1 и 2 (но возможна потеря функциональности)",
                            "isCorrect": true
                        }
                    ],
                    "multiple": false,
                    "img": "",
                    "comment": {
                        "text": "",
                        "img": ""
                    }
                },
                {
                    "title": "Где определяется структура, прикладная логика, создаваемого бизнес-приложения в системе 1С:Предприятие 8?",
                    "answers": [
                        {
                            "text": "Конфигурация",
                            "isCorrect": true
                        },
                        {
                            "text": "Информационная база",
                            "isCorrect": false
                        },
                        {
                            "text": "СУБД",
                            "isCorrect": false
                        },
                        {
                            "text": "Варианты 2 или 3 (в зависимости от варианта использования системы)",
                            "isCorrect": false
                        }
                    ],
                    "multiple": false,
                    "img": "",
                    "comment": {
                        "text": "",
                        "img": ""
                    }
                },
                {
                    "title": "Где хранятся учетные данные бизнес-приложения в системе 1С:Предприятие 8?",
                    "answers": [
                        {
                            "text": "Технологическая платформа",
                            "isCorrect": false
                        },
                        {
                            "text": "Конфигурация",
                            "isCorrect": false
                        },
                        {
                            "text": "Информационная база",
                            "isCorrect": true
                        }
                    ],
                    "multiple": false,
                    "img": "",
                    "comment": {
                        "text": "",
                        "img": ""
                    }
                },
                {
                    "title": "Для включения отборов в списках (обычных форм) по содержимому табличных частей объектов и их свойств, неотображаемых в форме:",
                    "answers": [
                        {
                            "text": "ничего дополнительно настраивать не надо, все реализовано на уровне платформы",
                            "isCorrect": false
                        },
                        {
                            "text": "реализуется только запросами",
                            "isCorrect": false
                        },
                        {
                            "text": "осуществляется только с помощью дополнительной настройки форм",
                            "isCorrect": false
                        },
                        {
                            "text": "необходимо создать объект критерии отбора",
                            "isCorrect": true
                        }
                    ],
                    "multiple": false,
                    "img": "",
                    "comment": {
                        "text": "",
                        "img": ""
                    }
                },
                {
                    "title": "Для включения отборов в списках (управляемых форм) по содержимому табличных частей объектов и их свойств, неотображаемых в форме:",
                    "answers": [
                        {
                            "text": "ничего дополнительно настраивать не надо, все реализовано на уровне платформы",
                            "isCorrect": false
                        },
                        {
                            "text": "реализуется произвольным запросом динамического списка",
                            "isCorrect": true
                        },
                        {
                            "text": "осуществляется только с помощью дополнительной настройки форм",
                            "isCorrect": false
                        },
                        {
                            "text": "необходимо создать объект критерии отбора",
                            "isCorrect": false
                        }
                    ],
                    "multiple": false,
                    "img": "",
                    "comment": {
                        "text": "",
                        "img": ""
                    }
                },
                {
                    "title": "Для установки языка интерфейса прикладного решения пользователю, необходимо:",
                    "answers": [
                        {
                            "text": "в настройках пользователя выбрать возможный язык, из списка дополнительных интерфейсов",
                            "isCorrect": false
                        },
                        {
                            "text": "в настройках пользователя выбрать возможный язык, из списка языков интерфейсов, заданных в ветви метаданных \"Языки\"",
                            "isCorrect": true
                        },
                        {
                            "text": "в настройках пользователя выбрать возможный язык, из списка предопределенных в платформе языков",
                            "isCorrect": false
                        },
                        {
                            "text": "верны варианты 1 и 2",
                            "isCorrect": false
                        },
                        {
                            "text": "верны все варианты",
                            "isCorrect": false
                        }
                    ],
                    "multiple": false,
                    "img": "",
                    "comment": {
                        "text": "",
                        "img": ""
                    }
                },
                {
                    "title": "Для запрета режима непосредственного удаления объектов пользователем необходимо...",
                    "answers": [
                        {
                            "text": "в свойствах конфигурации снять флаг \"Разрешить непосредственное удаление объектов\"",
                            "isCorrect": false
                        },
                        {
                            "text": "при определении роли для соответствующих объектов снять отметку у флага \"Удаление\"",
                            "isCorrect": false
                        },
                        {
                            "text": "при определении роли для соответствующих объектов снять отметку у флага \"Интерактивное удаление\"",
                            "isCorrect": true
                        },
                        {
                            "text": "в свойствах роли снять отметку у флага \"Разрешить удаление объектов\"",
                            "isCorrect": false
                        },
                        {
                            "text": "в свойствах роли снять отметку у флага \"Разрешить интерактивное удаление объектов\"",
                            "isCorrect": false
                        }
                    ],
                    "multiple": false,
                    "img": "",
                    "comment": {
                        "text": "",
                        "img": ""
                    }
                },
                {
                    "title": "Для каких компонент существуют сетевые ключи защиты?",
                    "answers": [
                        {
                            "text": "Клиентское приложение",
                            "isCorrect": true
                        },
                        {
                            "text": "Мобильный клиент",
                            "isCorrect": false
                        },
                        {
                            "text": "Сервер 1С:Предприятия",
                            "isCorrect": false
                        },
                        {
                            "text": "Правильны ответы 1 и 3",
                            "isCorrect": false
                        },
                        {
                            "text": "Правильны ответы 1 и 2",
                            "isCorrect": false
                        },
                        {
                            "text": "Верны все варианты",
                            "isCorrect": false
                        }
                    ],
                    "multiple": false,
                    "img": "",
                    "comment": {
                        "text": "",
                        "img": ""
                    }
                },
                {
                    "title": "Для каких объектов конфигурации возможен ввод предопределенных значений?",
                    "answers": [
                        {
                            "text": "Справочники",
                            "isCorrect": false
                        },
                        {
                            "text": "Документы",
                            "isCorrect": false
                        },
                        {
                            "text": "Планы видов характеристик, планы счетов, планы видов расчета",
                            "isCorrect": false
                        },
                        {
                            "text": "Справочники, планы видов характеристик",
                            "isCorrect": false
                        },
                        {
                            "text": "Справочники, планы видов характеристик, планы счетов, планы видов расчета",
                            "isCorrect": true
                        },
                        {
                            "text": "Все вышеперечисленные",
                            "isCorrect": false
                        }
                    ],
                    "multiple": false,
                    "img": "",
                    "comment": {
                        "text": "",
                        "img": ""
                    }
                },
                {
                    "title": "Для каких целей может использоваться \"Толстый клиент\"?",
                    "answers": [
                        {
                            "text": "Использование прикладного решения",
                            "isCorrect": false
                        },
                        {
                            "text": "Отладка прикладного решения",
                            "isCorrect": false
                        },
                        {
                            "text": "Разработка прикладного решения",
                            "isCorrect": false
                        },
                        {
                            "text": "Верны варианты 1 и 2",
                            "isCorrect": false
                        },
                        {
                            "text": "Верны все варианты",
                            "isCorrect": true
                        }
                    ],
                    "multiple": false,
                    "img": "",
                    "comment": {
                        "text": "",
                        "img": ""
                    }
                },
                {
                    "title": "Для каких целей может использоваться \"Тонкий клиент\"?",
                    "answers": [
                        {
                            "text": "Использование прикладного решения",
                            "isCorrect": false
                        },
                        {
                            "text": "Отладка прикладного решения",
                            "isCorrect": false
                        },
                        {
                            "text": "Разработка прикладного решения",
                            "isCorrect": false
                        },
                        {
                            "text": "Верны варианты 1 и 2",
                            "isCorrect": true
                        },
                        {
                            "text": "Верны все варианты",
                            "isCorrect": false
                        }
                    ],
                    "multiple": false,
                    "img": "",
                    "comment": {
                        "text": "",
                        "img": ""
                    }
                },
                {
                    "title": "Для каких целей служат табличные части справочников?",
                    "answers": [
                        {
                            "text": "Для хранения подчиненных сущностей, имеющих объектную природу",
                            "isCorrect": false
                        },
                        {
                            "text": "Для хранения подчиненных сущностей, не имеющих объектной природы",
                            "isCorrect": true
                        },
                        {
                            "text": "Для формирования печатных форм элементов справочника",
                            "isCorrect": false
                        },
                        {
                            "text": "У справочников не может быть табличных частей",
                            "isCorrect": false
                        }
                    ],
                    "multiple": false,
                    "img": "",
                    "comment": {
                        "text": "",
                        "img": ""
                    }
                },
                {
                    "title": "Для нечеткого поиска данных (с одной ошибкой) в механизме полнотекстового поиска используется выражение:",
                    "answers": [
                        {
                            "text": "!манолит",
                            "isCorrect": false
                        },
                        {
                            "text": "~манолит",
                            "isCorrect": false
                        },
                        {
                            "text": "манолит*",
                            "isCorrect": false
                        },
                        {
                            "text": "\"манолит\"",
                            "isCorrect": false
                        },
                        {
                            "text": "#манолит",
                            "isCorrect": true
                        }
                    ],
                    "multiple": false,
                    "img": "",
                    "comment": {
                        "text": "",
                        "img": ""
                    }
                },
                {
                    "title": "Для объектов конфигурации \"Бизнес-процесс\" и \"Задача\" выберите верное утверждение:",
                    "answers": [
                        {
                            "text": "В конфигурации может быть только один Бизнес-процесс и одна Задача",
                            "isCorrect": false
                        },
                        {
                            "text": "Бизнес-процесс может связываться одновременно с несколькими Задачами",
                            "isCorrect": false
                        },
                        {
                            "text": "Каждая Задача может использоваться в нескольких Бизнес-процессах",
                            "isCorrect": true
                        },
                        {
                            "text": "Варианты 2 и 3",
                            "isCorrect": false
                        },
                        {
                            "text": "При конфигурировании нет возможности определить связь между Бизнес-процессами и Задачами (она реализуется программно)",
                            "isCorrect": false
                        }
                    ],
                    "multiple": false,
                    "img": "",
                    "comment": {
                        "text": "",
                        "img": ""
                    }
                },
                {
                    "title": "Если рабочие серверы кластера 1С:Предприятие работают с использованием разных операционных систем то:",
                    "answers": [
                        {
                            "text": "ни каких ограничений на используемые СУБД нет",
                            "isCorrect": false
                        },
                        {
                            "text": "с MS SQL сервер можно работать с рабочего сервера под управлением операционных систем Windows, c другими СУБД только из-под Linux",
                            "isCorrect": false
                        },
                        {
                            "text": "с MS SQL сервер можно работать с рабочего сервера под управлением операционных систем Windows, c другими СУБД как из-под Windows, так и из-под Linux",
                            "isCorrect": false
                        }
                    ],
                    "multiple": false,
                    "img": "",
                    "comment": {
                        "text": "",
                        "img": ""
                    }
                },
                {
                    "title": "Из чего состоит основная конфигурация?",
                    "answers": [
                        {
                            "text": "Объекты конфигурации",
                            "isCorrect": true
                        },
                        {
                            "text": "Объекты встроенного языка",
                            "isCorrect": false
                        },
                        {
                            "text": "Объекты информационной базы",
                            "isCorrect": false
                        },
                        {
                            "text": "Верны ответы 1 и 3",
                            "isCorrect": false
                        },
                        {
                            "text": "Верны все варианты",
                            "isCorrect": false
                        }
                    ],
                    "multiple": false,
                    "img": "",
                    "comment": {
                        "text": "",
                        "img": ""
                    }
                },
                {
                    "title": "Как можно разделить список пользователей на группы?",
                    "answers": [
                        {
                            "text": "Нет такой возможности, список един для базы данных",
                            "isCorrect": false
                        },
                        {
                            "text": "В списке пользователей можно создать группу пользователей",
                            "isCorrect": false
                        },
                        {
                            "text": "Разделение списка осуществляется с помощью общих реквизитов",
                            "isCorrect": true
                        }
                    ],
                    "multiple": false,
                    "img": "",
                    "comment": {
                        "text": "",
                        "img": ""
                    }
                },
                {
                    "title": "Как разделить механизм нумерации документов по филиалам для многофирменного учета?",
                    "answers": [
                        {
                            "text": "Используя механизм префиксации (программно)",
                            "isCorrect": false
                        },
                        {
                            "text": "С помощью механизма разделения данных",
                            "isCorrect": true
                        },
                        {
                            "text": "Варианты 1 и/или 2",
                            "isCorrect": false
                        },
                        {
                            "text": "Разделение нумератора для многофирменного учета не поддерживается",
                            "isCorrect": false
                        }
                    ],
                    "multiple": false,
                    "img": "",
                    "comment": {
                        "text": "",
                        "img": ""
                    }
                },
                {
                    "title": "Какие варианты подчинения существуют в системе 1С:Предприятие 8?",
                    "answers": [
                        {
                            "text": "группам",
                            "isCorrect": false
                        },
                        {
                            "text": "элементам",
                            "isCorrect": false
                        },
                        {
                            "text": "группам и элементам",
                            "isCorrect": false
                        },
                        {
                            "text": "Варианты 1 и 3",
                            "isCorrect": false
                        },
                        {
                            "text": "Варианты 2 и 3",
                            "isCorrect": false
                        },
                        {
                            "text": "Верны все указанные ответы",
                            "isCorrect": true
                        }
                    ],
                    "multiple": false,
                    "img": "",
                    "comment": {
                        "text": "",
                        "img": ""
                    }
                },
                {
                    "title": "Пользователь может создать в справочнике группу",
                    "answers": [
                        {
                            "text": "Если в настройках справочника вид иерархии установлен в \"Иерархия элементов\"",
                            "isCorrect": false
                        },
                        {
                            "text": "Если в настройках справочника вид иерархии установлен в \"Иерархия групп и элементов\"",
                            "isCorrect": true
                        },
                        {
                            "text": "Если количество уровней иерархии более 2х (вне зависимости от вида иерархии)",
                            "isCorrect": false
                        },
                        {
                            "text": "В любом случае, вне зависимости от настройки объекта конфигурации",
                            "isCorrect": false
                        },
                        {
                            "text": "Варианты 1 и 3",
                            "isCorrect": false
                        },
                        {
                            "text": "Варианты 2 и 3",
                            "isCorrect": false
                        }
                    ],
                    "multiple": false,
                    "img": "",
                    "comment": {
                        "text": "",
                        "img": ""
                    }
                },
                {
                    "title": "Какие компоненты типовой поставки в системе 1С:Предприятие 8 защищены аппаратным ключом?",
                    "answers": [
                        {
                            "text": "Клиентское приложение",
                            "isCorrect": false
                        },
                        {
                            "text": "Типовое решение фирмы 1С",
                            "isCorrect": false
                        },
                        {
                            "text": "Сервер 1С:Предприятия",
                            "isCorrect": false
                        },
                        {
                            "text": "Варианты 1 и 3",
                            "isCorrect": true
                        },
                        {
                            "text": "Варианты 1 и 2",
                            "isCorrect": false
                        },
                        {
                            "text": "Верны все варианты",
                            "isCorrect": false
                        }
                    ],
                    "multiple": false,
                    "img": "",
                    "comment": {
                        "text": "",
                        "img": ""
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
            Answers: initAnswers(this),
            hasTip: false
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
        },
        checkTip()  {
            let comment = this.testData.chapters[this.chapterIndx].questions[this.questionIndx].comment;
            if (comment.text !== '' || comment.img !== '') {
                this.hasTip = true;
            } else
                this.hasTip = false;
        }

    }
}
const app = Vue.createApp(TestO).mount('#app');

function initAnswers(pageO) {
    let answersL = [];
    chaptersQ = pageO.testData.chapters.length;
    for (i = 0; i < chaptersQ; i++) {
        answersL.push([]);
        questionsQ = pageO.testData.chapters[i].questions.length;
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
    let chaptersQ = pageO.testData.chapters.length;
    let totalQ = 0;
    let rightAnswers = 0;
    
    for (let i = 0; i < chaptersQ; i++) {
        let questionQ = pageO.testData.chapters[i].questions.length;
        
        for (let j = 0; j < questionQ; j++) {
            let answer = pageO.Answers[i][j];
            let correctAnswers = [];
            rightAnswers += checkAnswerInternal(pageO.testData.chapters, answer, i, j, correctAnswers) ? 1 : 0;
            totalQ += 1;
        }
    }
    pageO.msg = `Правильных ответов: ${(rightAnswers / totalQ * 100).toFixed(2)}% (${rightAnswers}/${totalQ})`;
}
