# Frontend Mentor - Time tracking dashboard solution

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

- desktop

  <img width="1680" alt="Screen Shot 2022-04-05 at 7 30 28 PM" src="https://user-images.githubusercontent.com/52478972/161735321-3a43244b-fe7b-44aa-870d-6c134b806ccc.png">

- active state

  <img width="1680" alt="Screen Shot 2022-04-05 at 7 30 47 PM" src="https://user-images.githubusercontent.com/52478972/161735332-8c76c1f3-8b09-40e8-b27a-ae5644bf1fe9.png">

  <img width="1680" alt="Screen Shot 2022-04-05 at 7 31 04 PM" src="https://user-images.githubusercontent.com/52478972/161735305-c1ee964d-9b09-425b-88f1-4bcf4afb2fd5.png">

- mobile

  <img width="850" alt="Screen Shot 2022-04-05 at 7 31 21 PM" src="https://user-images.githubusercontent.com/52478972/161735329-0232ebc0-1b3b-41d7-8143-363bb324fd22.png">

  

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