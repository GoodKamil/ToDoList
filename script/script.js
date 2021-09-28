const sectionNewTaks = document.querySelector('.first__section');
const btnNewTask = document.querySelector('.header__btn');
const formNewTask = document.querySelector('.form');
const inputTask = document.querySelector('.form__text');
const importanceTask = document.querySelector('.form__section');
const endTask = document.querySelector('.form__label--date');
const rowTask = document.querySelector('.row');
let dataTask;
let end;

const date = new Date();
const day = date.getDate();
const numberMonth = `${date.getMonth() + 1}`.padStart(2, '0');
const year = `${date.getFullYear()}`.padStart(2, '0');

//Monhts
const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

class Task {
  constructor(task, importance, dateEndTask) {
    this.task = task;
    this.importance = importance;
    this.dateEndTask = dateEndTask;
  }
}

class App {
  #NewTask = [];
  constructor() {
    btnNewTask.addEventListener('click', this._ShowInput);
    formNewTask.addEventListener('submit', this._addTask.bind(this));
    rowTask.addEventListener('click', this._DeleteTask);
  }

  _DeleteTask(e) {
    const target = e.target.dataset.option;
    if (target !== 'delete') return;

    e.target.remove();
  }

  //show Input
  _ShowInput() {
    sectionNewTaks.classList.add('hidden');
    formNewTask.classList.remove('hidden');
    inputTask.focus();
  }

  _showTask(workout) {
    const html = `<div class="card ${workout.importance}" data-option="delete">
                    <div class="card__data">
                        <p class="card__data--text margin-bottom">🏁 ${year}-${numberMonth}-${day}</p>
     <p class="card__data--text">🛑 ${end}</p>
                    </div>
                    <div class="card__task">
                        <p class="card__task--text">📝 ${workout.task}</p>
                    </div>
                </div>`;

    rowTask.insertAdjacentHTML('afterbegin', html);

    //card task
  }

  //Render Task to first letter uppercase
  _Text(value) {
    const text = `${value[0].toUpperCase()}${value.slice(1).toLowerCase()}`;
    return text;
  }

  _hide() {
    inputTask.value = '';
    sectionNewTaks.classList.remove('hidden');
    formNewTask.classList.add('hidden');
  }

  //Add Task

  _addTask(e) {
    e.preventDefault();

    const valueInput = inputTask.value;
    const importance = importanceTask.value;
    end = endTask.value;

    console.log(end);

    if (!valueInput || Number(valueInput) || !end) return;

    const renderInputText = this._Text(valueInput);

    // console.log(importanceClass);
    dataTask = new Task(renderInputText, importance, end);

    //Add new object to workout array
    this.#NewTask.push(dataTask);
    console.log(this.#NewTask);

    //Render NewTask on list
    this._showTask(dataTask);

    //Hide form + clear input
    this._hide();
  }
}

const app = new App();

/////////////////////////////////////////////////////

// function showTask() {
//   const html = `<div class="card ${importanceClass}">
//                     <div class="card__data">
//                         <p class="card__data--text">${day} ${month[numberMonth]}</p>
//                     </div>
//                     <div class="card__task">
//                         <p class="card__task--text">${valueInput}</p>
//                     </div>
//                 </div>`;

//   rowTask.insertAdjacentHTML('beforeend', html);
// }

// _addTask(e) {
//   e.preventDefault();
//   valueInput = inputTask.value;
//   importance = importanceTask.value;
//   importanceClass = importance === 'red' ? 'red' : 'green';

//   if (!valueInput || Number(valueInput)) return;

//   console.log(importanceClass);

//   showTask();

//   inputTask.value = '';
//   formNewTask.classList.add('hidden');
// };

// btnNewTask.addEventListener('click', function () {
//   formNewTask.classList.remove('hidden');
//   inputTask.focus();
// });
