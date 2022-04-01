const numInputs = document.querySelectorAll('.numInput');
const tip = document.querySelector('.tip');
const total = document.querySelector('.total');
const radio = document.querySelectorAll('input[name="tips"]');
const tipCustom = document.querySelector('.perCustom');
const resetBtn = document.querySelector('.resetBtn');
let tipValue = 5;

function tipCalculate() {
    let bill = numInputs[0].value;
    let people = numInputs[1].value;
    if (!(tipValue && people && bill) || people == 0) {
        tip.innerHTML = 0.00;
        total.innerHTML = 0.00;
        return
    }
    tip.innerHTML = (Math.floor((bill * (tipValue/100)) / people *100)/100).toFixed(2);
    total.innerHTML = (Math.round((bill * (1 + tipValue/100)) / people *100)/100).toFixed(2);
}
function resetRadio() {
    for (let i = 0; i < radio.length; i++) {
        radio[i].checked = false;
    }
}
for (let i = 0; i < numInputs.length; i++) {
    numInputs[i].addEventListener('input', function() {
        tipCalculate();
    });
}
for (let i = 0; i < radio.length; i++) {
    radio[i].addEventListener('change', function() {
        tipValue = radio[i].value;
        tipCustom.value = '';
        tipCalculate();
    })
}
tipCustom.addEventListener('keyup', function(e) {
    tipValue = e.target.value;
    resetRadio();
    tipCalculate();
})
resetBtn.addEventListener('click', function() {
    document.querySelector('.container').reset();
});