const dashboards = document.querySelector('.dashboards');
let jsonData = [];

const displayData = async () => {
    jsonData.forEach(async data => {
        let languagesArray = ``;
        let toolsArray = ``;
        await data.languages.forEach(language => languagesArray += `<span>${language}</span>`)
        await data.tools.forEach(tool => toolsArray += `<span>${tool}</span>`);
        let html = `
        <div class="dashboard">
            <div class="imgContainer">
                <img src="${data.logo}" alt="${data.company} logo">
            </div>
            <div class="contents">
                <div class="high">
                    <div class="company">
                        ${data.company}
                    </div>
                    <div class="signs">
                        ${data.new ? '<span class="newSign">NEW!</span>' : '' }
                        ${data.featured ? '<span class="featureSign">FEATURED</span>' : '' }
                    </div>
                </div>
                <div class="mid">
                    <p class="title">${data.position}</p>
                </div>
                <div class="low">
                    <p class="postedAt">${data.postedAt}</p>
                    •
                    <p class="contract">${data.contract}</p>
                    •
                    <p class="location">${data.location}</p>
                    </div>
                </div>
            <div class="tags">
                <span class="role">${data.role}</span>
                <span class="level">${data.level}</span>
                <p class="languages">
                    ${languagesArray}
                </p>
                <p class="tools">
                    ${toolsArray}
                </p>
            </div>
        </div>
    `;
    dashboards.insertAdjacentHTML('beforeend', html);
    })
    
}

const loadJson = async () => {
    await fetch('./data.json')
        .then(response => response.json())
        .then(data => jsonData = data)
        .catch(error => console.log(error));
    displayData();
}
loadJson();

