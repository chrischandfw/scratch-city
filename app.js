// import functions and grab DOM elements
const cityNameInput = document.getElementById('city-name-input');
const cityNameEl = document.getElementById('city-name');

const waterDropdown = document.getElementById('water-dropdown');
const skylineDropdown = document.getElementById('skyline-dropdown');
const natureDropdown = document.getElementById('nature-dropdown');

const countMessageEl = document.getElementById('count-message');

const waterImgEl = document.getElementById('water-img');
const skylineImgEl = document.getElementById('skyline-img');
const natureImgEl = document.getElementById('nature-img');

const addSloganButton = document.getElementById('slogan-button');
const sloganInputEl = document.getElementById('slogan-input');


let waterCount = 0;
let skylineCount = 0;
let natureCount = 0;
const slogans = [];

addSloganButton.addEventListener('click', () => {
    const newSlogan = sloganInputEl.value;

    slogans.push(newSlogan);

    displaySlogans();

    sloganInputEl.value = '';
});

function displaySlogans() {
    const listEl = document.getElementById('list');

    listEl.textContent = '';
  
    for (let slogan of slogans) {
        const pTag = document.createElement('p');
  
        pTag.classList.add('slogan');
        pTag.textContent = slogan;
        listEl.append(pTag);
    }  
}

cityNameInput.addEventListener('input', () => {
    cityNameEl.textContent = cityNameInput.value;
});

skylineDropdown.addEventListener('change', () => {
    skylineCount++;
    const Skyline = skylineDropdown.value;
    skylineImgEl.src = `./assets/${Skyline}-Skyline.jpg`;
    displayCountText();
});

natureDropdown.addEventListener('change', () =>{
    natureCount++;
    const Nature = natureDropdown.value;
    natureImgEl.src = `./assets/${Nature}-Nature.jpg`;
    displayCountText();
});

waterDropdown.addEventListener('change', () =>{
    waterCount++;
    const Water = waterDropdown.value;
    waterImgEl.src = `./assets/${Water}-Water.jpg`;
    displayCountText();
});

function displayCountText() {
    countMessageEl.textContent = `You changed the water ${waterCount} times, the skyline ${skylineCount} times and the nature ${natureCount} times`;
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
