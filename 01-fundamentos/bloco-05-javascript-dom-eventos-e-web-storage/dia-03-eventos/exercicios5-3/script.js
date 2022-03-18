function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const daysList = document.querySelector('#days')

for (let index = 0; index < dezDaysList.length; index += 1) {
  const dayNumber = dezDaysList[index];
  const dayNumberListItem = document.createElement('li');
  dayNumberListItem.innerHTML = dayNumber;
  dayNumberListItem.classList = ('day');
  if (dayNumberListItem.innerText == 24 || dayNumberListItem.innerText == 25 || dayNumberListItem.innerText == 31) {
    dayNumberListItem.classList.add('holiday');
  }
  if (dayNumberListItem.innerText == 4 || dayNumberListItem.innerText == 11 || dayNumberListItem.innerText == 18 || dayNumberListItem.innerText == 25) {
    dayNumberListItem.classList.add("friday")
  }
  daysList.appendChild(dayNumberListItem);
};

let feriado = document.createElement('button');
function holidayButton(btnPlaceholder) {
  feriado.id = ('btn-holiday');
  document.getElementsByClassName('buttons-container')[0].appendChild(feriado);
  feriado.innerText = btnPlaceholder;
}
holidayButton('Feriados');

function showHolidays() {

  feriado.addEventListener('click', function () {
    for (let i = 0; i < document.getElementsByClassName('holiday').length; i += 1) {
      if (document.getElementsByClassName('holiday')[i].style.color === 'rgb(233, 119, 119)') {
        document.getElementsByClassName('holiday')[i].style.color = '#777';
      } else {
        document.getElementsByClassName('holiday')[i].style.color = 'rgb(233, 119, 119)';
      }
    }
  })

}
showHolidays();

let friday = document.createElement('button');
function fridayButton(btnPlaceholder) {
  friday.id = ('btn-friday');
  document.getElementsByClassName('buttons-container')[0].appendChild(friday);
  friday.innerText = btnPlaceholder;
}
fridayButton('Sexta-feira');

function showSextou(fridayDays) {

  friday.addEventListener('click', function () {
    for (let i = 0; i < document.getElementsByClassName('friday').length; i += 1) {
      if (document.getElementsByClassName('friday')[i].innerText !== 'SEXTOU O/') {
        document.getElementsByClassName('friday')[i].innerText = 'SEXTOU O/';
      } else {
        document.getElementsByClassName('friday')[i].innerHTML = fridayDays[i]
      }
    }
  })

}
showSextou([4, 11, 18, 25]);

for (let i = 0; i < document.querySelectorAll('.day').length; i += 1) {
  let dayfocused = document.querySelectorAll('.day')[i];

  function changeFontSize(event) {
    event.target.style.fontSize = '15px';
    event.target.style.transition = '0.2s';
    event.target.style.cursor = 'default';
  }
  dayfocused.addEventListener('mouseover', changeFontSize)
  dayfocused.addEventListener('mouseout', reChangeFontSize)

  function reChangeFontSize(event) {
    event.target.style.fontSize = '20px';
  }
}

// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function createTask(tarefa) {
  let task = document.createElement('span');
  task.innerText = tarefa
  document.querySelector('.my-tasks').appendChild(task)
}

createTask('Estudar:');

//Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
//O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
//O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

let taskColor = document.createElement('div');
function giveTaskColor(color) {
  taskColor.className = 'task'
  taskColor.style.backgroundColor = color;
  document.querySelector('.my-tasks').appendChild(taskColor)
}
giveTaskColor('blue')


//Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
//Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

const element = document.querySelector(".my-tasks").lastChild;
function changeClass(event) {
  if (element.className == 'task'){
    event.target.classList.add("selected");
    event.target.style.width = '45px'
    event.target.style.height = '45px'
    event.target.style.transition = '0.2s';
    event.target.style.cursor = 'pointer';
  } else {
    event.target.classList.remove("selected");
    event.target.style.width = '35px';
    event.target.style.height = '35px';
  }
}

element.addEventListener('click', changeClass)

// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

for (let i = 0; i < document.querySelectorAll('.day').length; i += 1) {
  const dayFocused = document.querySelectorAll('.day')[i];
  function changeDayColor(){
    if (element.className == 'task selected'){
      if (dayFocused.style.color == taskColor.style.backgroundColor) {
        dayFocused.style.color = '#777'
      } else {
        dayFocused.style.color = taskColor.style.backgroundColor
      } 
    }
  }
  dayFocused.addEventListener('click', changeDayColor)

}
