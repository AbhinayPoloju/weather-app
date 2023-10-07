const apiKey = 'efe8092059685a1911d0f1564c2eed63';

document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', () => {
        const cityInput = document.getElementById('cityInput');
        const cityName = cityInput.value;

        // Fetch weather data
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                const weatherInfo = document.getElementById('weatherInfo');
                weatherInfo.innerHTML = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    });
});
