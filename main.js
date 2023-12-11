function getWeather() {
    const city = document.getElementById('cityInput').value;

    if (city === '') {
        alert('都市名を入力してください');
        return;
    }

    const apiKey = '8254ac6ff1563edff8d3e846d8ecd081'; // ここにOpenWeatherMapのAPIキーを設定
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},jp&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>${data.name}の天気</h2>
                <p>現在の気温: ${data.main.temp} °C</p>
                <p>天気状況: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('天気情報を取得できませんでした', error);
        });
}
