const menus = document.querySelectorAll('li');
const currentTimes = document.querySelectorAll('.time > span');
const pastPeriods = document.querySelectorAll('.period');
const pastTimes = document.querySelectorAll('.periodDetail');

let jsonData = [];
let myPeriod = 'daily';
const assignData = () => {
    let prevTarget = 'Yesterday';
    if (myPeriod == 'weekly') prevTarget = 'Last Week';
    else if (myPeriod == 'monthly') prevTarget = 'Last Month';
    for (let i = 0; i < currentTimes.length; i++) {
        currentTimes[i].innerHTML = jsonData[i].timeframes[myPeriod].current;
        pastPeriods[i].innerHTML = prevTarget;
        pastTimes[i].innerHTML = jsonData[i].timeframes[myPeriod].previous;
    }
}

const loadJson = async () => {
    await fetch('./data.json')
        .then(response => response.json())
        .then(data => jsonData = data)
        .catch(error => console.log(error));
    assignData()
}
loadJson();
menus.forEach((menu) => {
    menu.addEventListener('click', () => {
        myPeriod = menu.innerHTML.toLowerCase();
        assignData()
    });
})