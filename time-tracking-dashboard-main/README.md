# Frontend Mentor - Time tracking dashboard solution

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

- desktop
- active state
- mobile

### Links

- Solution URL: [github](https://github.com/ssj24/frontendMentor_sujee/tree/master/time-tracking-dashboard-main)
- Live Site URL: [netlify](https://famous-strudel-767284.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

how to read a json file

```js
fetch('./data.json')
  .then(response => response.json())
  .then(data => jsonData = data)
  .catch(error => console.log(error));
```

### Continued development

Add stopwatch feature to each dashboard. User can add each time to current hour.

Make input table for dashboard.

## Author

Frontend Mentor - [@ssj24](https://www.frontendmentor.io/profile/ssj24)