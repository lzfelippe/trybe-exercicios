let header = document.getElementById('header-container');
header.style.backgroundColor = '#00b068';

let body = document.getElementById('container');
body.style.backgroundColor = '#f3f3f3';

let emergencyTasks = document.querySelectorAll('.emergency-tasks div');
for (let index = 0; index < emergencyTasks.length; index += 1) {
    emergencyTasks[index].style.backgroundColor = '#ffa084';
}

let noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks div');
for (let index = 0; index < noEmergencyTasks.length; index += 1) {
    noEmergencyTasks[index].style.backgroundColor = '#f9dc5e';
}

let backgEmergency = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < backgEmergency.length; index += 1) {
    backgEmergency[index].style.backgroundColor = '#a500f5';
}

let backgNoEmergency = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < backgNoEmergency.length; index += 1) {
    backgNoEmergency[index].style.backgroundColor = '#252326';
}

let footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#013533';