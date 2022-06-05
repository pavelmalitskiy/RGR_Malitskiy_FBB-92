const DATA = [
    {
        question: 'Из каких основных частей состоит автомобиль?',
        answers: [
            {
                id: '0',
                value: 'Двигатель, шасси, рама',
                correct: false,
            },
            {
                id: '1',
                value: 'Двигатель, кузов, шасси',
                correct: true,
            },
            {
                id: '2',
                value: 'Шасси, тормозная система, кузов',
                correct: false,
            }
        ]
    },
    {
    question: 'Что называется литражом двигателя?',
        answers: [
            {
                id: '3',
                value: 'Сумма полных объемов всех цилиндров двигателя',
                correct: false,
            },
            {
                id: '4',
                value: 'Сумма рабочих объемов всех цилиндров двигателя',
                correct: true,
            },
            {
                id: '5',
                value: 'Количество цилиндров в двигателе',
                correct: false,
            }
        ]
    },
    {
        question: 'Где расположен топливный насос в инжекторном двигателе?',
        answers: [
            {
                id: '6',
                value: 'Между баком и карбюратором',
                correct: false,
            },
            {
                id: '7',
                value: 'В топливном баке',
                correct: true,
            },
            {
                id: '8',
                value: 'Во впускном трубопроводе',
                correct: false,
            }
        ]
    },
    {
        question: 'Назначение аккумуляторной батареи в автомобиле?',
        answers: [
            {
                id: '9',
                value: 'Для питания бортовой сети автомобиля при неработающем двигателе и запуска двигателя',
                correct: true,
            },
            {
                id: '10',
                value: 'Для поддержания необходимого напряжения',
                correct: false,
            },
            {
                id: '11',
                value: 'Для создания необходимого крутящего момента при запуске двигателя',
                correct: false,
            }
        ]
    },
    {
        question: 'Как первоначально хотели назвать популярный автомобиль «Победа»?',
        answers: [
            {
                id: '12',
                value: 'Москва',
                correct: false,
            },
            {
                id: '13',
                value: 'Родина',
                correct: true,
            },
            {
                id: '14',
                value: 'Звезда',
                correct: false,
            }
        ]
    },
    {
        question: 'В каком городе в 1899 году были выданы первые номерные знаки?',
        answers: [
            {
                id: '15',
                value: 'Берлин',
                correct: false,
            },
            {
                id: '16',
                value: 'Дрезден',
                correct: false,
            },
            {
                id: '17',
                value: 'Мюнхен',
                correct: true,
            }
        ]
    },
    {
        question: 'Во сколько километров была оценена самая длинная пробка между Парижем и Леоном в 1980 году?',
        answers: [
            {
                id: '18',
                value: '200км',
                correct: true,
            },
            {
                id: '19',
                value: '300км',
                correct: false,
            },
            {
                id: '20',
                value: '100км',
                correct: false,
            }
        ]
    },
    {
        question: 'Каким автомобилем был награжден после полета в космос Юрий Гагарин?',
        answers: [
            {
                id: '21',
                value: 'Жигули',
                correct: false,
            },
            {
                id: '22',
                value: 'Волга',
                correct: true,
            },
            {
                id: '23',
                value: 'Нива',
                correct: false,
            }
        ]
    },
    {
        question: 'На сколько километров в режиме форсажа слышны выхлопные газы автомобиля Aston Martin Vantage?',
        answers: [
            {
                id: '24',
                value: 'Три',
                correct: false,
            },
            {
                id: '25',
                value: 'Шесть',
                correct: true,
            },
            {
                id: '26',
                value: 'Девять',
                correct: false,
            }
        ]
    },
    {
        question: 'Под каким индексом первоначально был выпущен знаменитый автомобиль Porsche 911?',
        answers: [
            {
                id: '27',
                value: '901',
                correct: true,
            },
            {
                id: '28',
                value: '905',
                correct: false,
            },
            {
                id: '29',
                value: '907',
                correct: false,
            }
        ]
    },
    {
        question: 'Название какого автомобильного концерна ранее красовалось на Эйфелевой башне?',
        answers: [
            {
                id: '30',
                value: 'Пежо',
                correct: false,
            },
            {
                id: '31',
                value: 'Ситроен',
                correct: true,
            },
            {
                id: '32',
                value: 'Рено',
                correct: false,
            }
        ]
    },
    {
        question: 'Какую марку автомобилей предпочитал всем остальным Стив Джобс?',
        answers: [
            {
                id: '33',
                value: 'Феррари',
                correct: false,
            },
            {
                id: '34',
                value: 'Мерседес',
                correct: true,
            },
            {
                id: '35',
                value: 'БМВ',
                correct: false,
            }
        ]
    },
    {
        question: 'Откуда пошло название автомобилей типа "джип"?',
        answers: [
            {
                id: '36',
                value: 'От названия "машина всеобщего назначения" в армиях США и Великобритании',
                correct: true,
            },
            {
                id: '37',
                value: 'От первых букв имени и фамилии создателя данного типа машин',
                correct: false,
            },
            {
                id: '38',
                value: 'От названия концерна, впервые выпустившего данный тип автомобиля',
                correct: false,
            }
        ]
    },
    {
        question: 'Как называется тип легкого коммерческого автомобиля с открытой грузовой платформой?',
        answers: [
            {
                id: '39',
                value: 'Хэтчбэк',
                correct: false,
            },
            {
                id: '40',
                value: 'Седан',
                correct: false,
            },
            {
                id: '41',
                value: 'Пикап',
                correct: true,
            }
        ]
    },
    {
        question: 'Небольшой легкий автомобиль высокой проходимости для езды по несильно пересеченному бездорожью называется?',
        answers: [
            {
                id: '42',
                value: 'Картинг',
                correct: false,
            },
            {
                id: '43',
                value: 'Багги',
                correct: true,
            },
            {
                id: '44',
                value: 'Ралли',
                correct: false,
            }
        ]
    },
    {
        question: 'Наличие складывающегося матерчатого верха характерно для автомобиля типа?',
        answers: [
            {
                id: '45',
                value: 'Лимузин',
                correct: false,
            },
            {
                id: '46',
                value: 'Ландоле',
                correct: false,
            },
            {
                id: '47',
                value: 'Кабриолет',
                correct: true,
            }
        ]
    },
    {
        question: 'В какой стране полицейским выдают Lamborghini, Ferrari и Bentley, чтобы они могли перехватить местных лихачей на спорткарах?',
        answers: [
            {
                id: '48',
                value: 'Египет',
                correct: false,
            },
            {
                id: '49',
                value: 'ОАЭ',
                correct: false,
            },
            {
                id: '50',
                value: 'Дубаи',
                correct: true,
            }
        ]
    },
    {
        question: 'На логотипе какого авто изображена змея, которая пожирает человека?',
        answers: [
            {
                id: '51',
                value: 'Porsche',
                correct: false,
            },
            {
                id: '52',
                value: 'Alfa Romeo',
                correct: true,
            },
            {
                id: '53',
                value: 'Aston Martin',
                correct: false,
            }
        ]
    },
    {
        question: 'Название бренда Nissan является сокращением фразы?',
        answers: [
            {
                id: '54',
                value: 'Японская промышленность',
                correct: true,
            },
            {
                id: '55',
                value: 'Обильное поле',
                correct: false,
            },
            {
                id: '56',
                value: 'Автомобильная промышленность',
                correct: false,
            }
        ]
    },
    {
        question: 'Название бренда Toyota является также фамилией?',
        answers: [
            {
                id: '57',
                value: 'Древнего японского императора',
                correct: false,
            },
            {
                id: '58',
                value: 'Популярного персонажа японской мифологии',
                correct: false,
            },
            {
                id: '59',
                value: 'Основателя бренда',
                correct: true,
            }
        ]
    },


];

let localResult = {};



const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');

const renderQuestion = (index) => {
    renderIndicator(index + 1);
    question.dataset.currentStep = index;

    const renderAnswers = () => DATA[index].answers
     .map((answer) => `
            <li>
            <label>
                <input class='answer-input' type="radio" name=${index} value=${answer.id}>
                ${answer.value}
            </label>
            </li>
            `
        )  

        .join('');
    question.innerHTML = `
    <div class="quiz-question-item">
                    <div class="quiz-question-item-question">${DATA[index].question}</div>
                    <ul class="quiz-question-item-answers">${renderAnswers()}</ul>
                </div>
    
    `;
};

const renderResults = () => {

    let content = ''; 

    const getClassname = (answer, questionIndex) => {
        let classname = '';

        if (!answer.correct && answer.id === localResult[questionIndex]) {
            classname = 'answer--invalid'; 
        } else if (answer.correct) {
            classname = 'answer--valid';
        }

        return classname;
    };
    
    const getAnswers = (questionIndex) => DATA[questionIndex].answers
        .map((answer) => `<li class=${getClassname(answer, questionIndex)}>${answer.value}</li>`)
        .join('');
    


    DATA.forEach((question, index) => {
        content += `
        <div class="quiz-results-item">
                    <div class="quiz-results-item-question">${question.question}</div>
                    <ul class="quiz-results-item-answers">${getAnswers(index)}</ul>
                       </div>
        `;
    });

    results.innerHTML = content;

};

const renderIndicator = (currentStep) => {
     indicator.innerHTML = `${currentStep}/${DATA.length}`;
};

quiz.addEventListener('change', (event) => {
    if (event.target.classList.contains('answer-input')) {
        localResult[event.target.name] =  event.target.value;
        btnNext.disabled = false; 
        
    }


});

quiz.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-next')) {
        const nextQuestionIndex = Number(question.dataset.currentStep) + 1;
        
        if(DATA.length === nextQuestionIndex) {
            question.classList.add('question--hidden');
            indicator.classList.add('indicator--hidden');
            results.classList.add('results--visible');
            btnNext.classList.add('btn-next--hidden');
            btnRestart.classList.add('btn-restart--visible');
            renderResults();
        }
        else {
            renderQuestion(nextQuestionIndex);
        }

        btnNext.disabled = true;
    }
    if (event.target.classList.contains('btn-restart')) {
        localResult = {};
        results.innerHTML = '';

        
         question.classList.remove('question--hidden');
         indicator.classList.remove('indicator--hidden');
         results.classList.remove('results--visible');
         btnNext.classList.remove('btn-next--hidden');
         btnRestart.classList.remove('btn-restart--visible');
         renderQuestion(0);
    }


});

renderQuestion(0);
 
