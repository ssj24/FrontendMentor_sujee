const radioBtns = document.querySelector('.radioBtns');
const tips = ['5%', '10%', '15%', '25%', '50%', 'Custom'];
let radioInput = '';
for (let i = 0; i < tips.length; i++) {
    if (i == tips.length - 1) {
        radioInput = `
        <button class="customBtn">Custom</button>
        `
        radioBtns.insertAdjacentHTML('beforeend', radioInput);
        continue
    }
    radioInput = `
    <label for="per${i+1}" class="radioLabel">
        <div class="radioBtn">
        <p>${tips[i]}</p>
        </div>
    </label>
    <input type="radio" name="tips" id="per${i+1}">
    `
    radioBtns.insertAdjacentHTML('beforeend', radioInput);
}