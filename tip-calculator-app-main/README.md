# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). 

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

- desktop page

<img width="1680" alt="Screen Shot 2022-04-01 at 7 46 05 PM" src="https://user-images.githubusercontent.com/52478972/161251187-dc3aa422-c382-4ae6-98c4-53a07359affe.png">

- calculation completed

<img width="1680" alt="Screen Shot 2022-04-01 at 7 46 52 PM" src="https://user-images.githubusercontent.com/52478972/161251196-b11c5b0c-fd3c-4972-af03-c8d42b9cefdc.png">

- mobile page

<img width="860" alt="Screen Shot 2022-04-01 at 7 47 07 PM" src="https://user-images.githubusercontent.com/52478972/161251202-3a34f65d-e34c-46be-ac3e-c32ccb92b881.png">

- throw error message

<img width="860" alt="Screen Shot 2022-04-01 at 7 47 39 PM" src="https://user-images.githubusercontent.com/52478972/161251205-5bbf5f52-9cb8-4fc0-8fb6-85e75c45cd20.png">

### Links

- Solution URL: [github](https://github.com/ssj24/frontendMentor_sujee/tree/master/tip-calculator-app-main)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

1. display number to the second decimal place

   ```javascript
   Math.floor(calculation*100)/100
   ```

2. when the input values are invalid, stop calculate

   ```javascript
   if (!(tipValue && people && bill) || people == 0) {
           tip.innerHTML = 0.00;
           total.innerHTML = 0.00;
           return
   }
   ```

3. you can't get the radio value easily like `[radio object].value` with javascript

## Author

Frontend Mentor - [@ssj24](https://www.frontendmentor.io/profile/ssj24)