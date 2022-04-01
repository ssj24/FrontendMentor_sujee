const radioBtns = document.querySelector('.radioBtns');
const tips = ['5', '10', '15', '25', '50', 'Custom'];
const numInputs = document.querySelectorAll('.numInput');
const tip = document.querySelector('.tip');
const total = document.querySelector('.total');
const radio = document.getElementsByName('tips');
radio.value = 5;
let radioInput = '';

for (let i = 0; i < tips.length; i++) {
    if (i == tips.length - 1) {
        radioInput = `
        <input type="number" name="customTips" id="customTips" class="radioLabel per${i+1}" placeholder = "Custom">
        `
        radioBtns.insertAdjacentHTML('beforeend', radioInput);
        break;
    }
    radioInput = `
    <input type="radio" name="tips" id="per${i+1}" value=${tips[i]}>
    <label for="per${i+1}" class="radioLabel per${i+1}">
        <div class="radioBtn">
        <p>${tips[i]}%</p>
        </div>
    </label>
    `
    radioBtns.insertAdjacentHTML('beforeend', radioInput);
}
function tipCalculate(bill = numInputs[0].value, tipPer = radio.value, people = numInputs[1].value) {
    console.log(tipPer);
    tip.innerHTML = (bill / people).toFixed(2);
    total.innerHTML = ((bill * (1 + tipPer/100)) / people).toFixed(2);
}

for (let i = 0; i < numInputs.length; i++) {
    numInputs[i].addEventListener('change', tipCalculate());
}