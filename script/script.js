const btnNewTask = document.querySelector('.header__btn');
const formNewTask = document.querySelector('.form');
const inputTask = document.querySelector('.form__text');
const importanceTask = document.querySelector('.form__section');
const rowTask = document.querySelector('.row');

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

let date = new Date();
let day = date.getDate();
let numberMonth = date.getMonth();

class Task {
  constructor(valueInput, importance) {
    this.valueInput = valueInput;
    this.importance = importance;
  }
}

class App {
  #NewTask = [];
  constructor() {
    btnNewTask.addEventListener('click', this._ShowInput);
    formNewTask.addEventListener('submit', this._addTask.bind(this));
  }

  //show Input
  _ShowInput() {
    formNewTask.classList.remove('hidden');
    inputTask.focus();
  }

  _showTask(workout) {
    const html = `<div class="card ${workout.importance}">
                    <div class="card__data">
                        <p class="card__data--text">${day} ${month[numberMonth]}</p>
                    </div>
                    <div class="card__task">
                        <p class="card__task--text">${workout.valueInput}</p>
                    </div>
                </div>`;

    rowTask.insertAdjacentHTML('beforeend', html);
  }

  //Render Task to first letter uppercase
  _Text(value) {
    const text = `${value[0].toUpperCase()}${value.slice(1).toLowerCase()}`;
    return text;
  }

  _hide() {
    inputTask.value = '';
    formNewTask.classList.add('hidden');
  }

  //Add Task

  _addTask(e) {
    e.preventDefault();
    const valueInput = inputTask.value;
    const importance = importanceTask.value;
    let dataTask;

    if (!valueInput || Number(valueInput)) return;

    const renderInputText = this._Text(valueInput);

    // console.log(importanceClass);
    dataTask = new Task(renderInputText, importance);

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
