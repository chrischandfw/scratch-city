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
const addSloganButton = document.getElementById('add-slogan-button');
const sloganInputEl = document.getElementById('slogan-input');

// let state
let waterCount = 0;
let skylineCount = 0;
let natureCount = 0;
const slogans = [];

// set event listeners 
addSloganButton.addEventListener('click', () =>) {
	const newSlogan = sloganInputEl.value;

	slogans.push(newSlogan);

	displaySlogans();

	sloganInputEl.value ='';
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
