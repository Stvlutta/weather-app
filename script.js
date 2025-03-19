const apiKey = '4497a63315210eb70361589a920ec990'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

const searchBox = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');

async function checkWeather(city) {
    const response = await fetch(`${baseUrl}${city}&appid=${apiKey}`);

    const data = await response.json();
    console.log(data);
document.querySelector('.city').innerHTML = data.name;
document.querySelector('.temp').innerHTML = data.main.temp
document.querySelector('.humidity').innerHTML = data.main.humidity;
document.querySelector('.wind').innerHTML = data.wind.speed + 'm/s';

}

checkWeather('Nairobi');

// Event listener
searchButton.addEventListener('click', () => {
event.preventDefault();
    checkWeather(searchBox.value);
});
