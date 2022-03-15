document.getElementById("header-container").style.backgroundColor = 'green';
document.querySelectorAll(".emergency-tasks")[0].style.backgroundColor = 'salmon';
let emergencyTasks = document.querySelectorAll(".emergency-tasks h3");
console.log(document.querySelectorAll(".emergency-tasks h3"));
for (let i = 0; i < emergencyTasks.length; i += 1){
  document.querySelectorAll(".emergency-tasks h3")[i].style.backgroundColor = 'purple'
}
document.querySelectorAll(".no-emergency-tasks")[0].style.backgroundColor = 'yellow'
let noEmergencyTasks = document.querySelectorAll(".no-emergency-tasks h3");
for (let i = 0; i < noEmergencyTasks.length; i += 1){
  document.querySelectorAll(".no-emergency-tasks h3")[i].style.backgroundColor = 'black'
}
document.getElementById("footer-container").style.backgroundColor = 'darkgreen'