document.getElementById("header-container").style.backgroundColor = '#00B069';
document.querySelectorAll(".emergency-tasks")[0].style.backgroundColor = '#FF9F84';
let emergencyTasks = document.querySelectorAll(".emergency-tasks h3");
console.log(document.querySelectorAll(".emergency-tasks h3"));
for (let i = 0; i < emergencyTasks.length; i += 1){
  document.querySelectorAll(".emergency-tasks h3")[i].style.backgroundColor = '#A54DF3'
}
document.querySelectorAll(".no-emergency-tasks")[0].style.backgroundColor = '#F9DB5E'
let noEmergencyTasks = document.querySelectorAll(".no-emergency-tasks h3");
for (let i = 0; i < noEmergencyTasks.length; i += 1){
  document.querySelectorAll(".no-emergency-tasks h3")[i].style.backgroundColor = '#232525'
}
document.getElementById("footer-container").style.backgroundColor = '#003533'