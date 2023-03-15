const header = document.getElementById('header-container').style.backgroundColor = 'rgb(0,176,104)';

let body = document.getElementById('container');
body.style.backgroundColor = '#f3f3f3';

const emergencyTasks = document.querySelectorAll('.emergency-tasks')
for (let index = 0; index < emergencyTasks.length; index += 1) {
    emergencyTasks[index].style.backgroundColor = 'rgb(255,160,132)';
}

const noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks')
for (let index = 0; index < noEmergencyTasks.length; index += 1) {
    noEmergencyTasks[index].style.backgroundColor = 'rgb(249,220,94)';
}

const emergencyTitles = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTitles.length; index += 1) {
    emergencyTitles[index].style.backgroundColor = 'rgb(165,0,244)';
}

const noEmergencyTitles = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTitles.length; index += 1) {
    noEmergencyTitles[index].style.backgroundColor = 'rgb(35,37,36)';
}

const footer = document.getElementsByTagName('footer')[0].style.backgroundColor = 'rgb(1,53,51)';
