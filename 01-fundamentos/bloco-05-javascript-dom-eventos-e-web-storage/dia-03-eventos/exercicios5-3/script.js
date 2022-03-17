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
      if (document.getElementsByClassName('holiday')[i].style.backgroundColor === 'lightblue') {
        document.getElementsByClassName('holiday')[i].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        document.getElementsByClassName('holiday')[i].style.backgroundColor = 'lightblue';
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