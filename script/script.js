const btnNewTask = document.querySelector('.header__btn');
const formNewTask = document.querySelector('.form');
const inputTask = document.querySelector('.form__text');
const importanceTask = document.querySelector('.form__section');
const endTask = document.querySelector('.form__date');
const rowTask = document.querySelector('.row');
let dataTask;
let end;

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
  constructor(valueInput, importance, id) {
    this.valueInput = valueInput;
    this.importance = importance;
    this.id = id;
  }
}

class App {
  #NewTask = [];
  #numberId = 0;
  constructor() {
    btnNewTask.addEventListener('click', this._ShowInput);
    formNewTask.addEventListener('submit', this._addTask.bind(this));
    // rowTask.addEventListener('click', this._DeleteTask.bind(this));
  }

  // _DeleteTask(e) {
  //   const nrId = Number(e.target.dataset.id);
  //   console.log(nrId);
  //   // this.#NewTask.splice(nrId, 1);

  //   // const RenderId = this._RenderIdTask(nrId);

  //   this._RenderIdTask(nrId);

  //   // console.log(this.#NewTask);
  //   console.log(this.#NewTask);
  // }

  // _RenderIdTask(value) {
  //   this.#NewTask.forEach(task => {
  //     console.log(task.id.findIndex(value));
  //   });
  // }

  //show Input
  _ShowInput() {
    formNewTask.classList.remove('hidden');
    inputTask.focus();
  }

  _showTask(workout) {
    const html = `<div class="card ${workout.importance}" data-id="${this
      .#numberId++}">
                    <div class="card__data">
                        <p class="card__data--text">${day} ${
      month[numberMonth]
    }</p>
                    </div>
                    <div class="card__task">
                        <p class="card__task--text">${workout.valueInput}</p>
                    </div>
                </div>`;

    rowTask.insertAdjacentHTML('beforeend', html);

    //card task
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
    end = endTask.value;

    console.log(end);

    if (!valueInput || Number(valueInput)) return;

    const renderInputText = this._Text(valueInput);

    // console.log(importanceClass);
    dataTask = new Task(renderInputText, importance, this.#numberId);

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
