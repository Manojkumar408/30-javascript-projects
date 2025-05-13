const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherImg = document.querySelector(".weather_img");
let degree = document.querySelector(".degree");
let discription = document.querySelector(".discription");
const humidity = document.querySelector(".humidity_value");
const wind = document.querySelector(".wind_value")



const apiKey = "d6ac91f2b92509d2238a58a0661602a4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".valid").style.display = "block";
        document.querySelector(".weather-body").style.display = "none";

    }
    else {
        let data = await response.json();

        degree.innerHTML = Math.round(data.main.temp) + "°c";
        discription.innerHTML = data.name;
        wind.innerHTML = data.wind.speed + "km/h";
        humidity.innerHTML = data.main.humidity + "%";
        switch (data.weather[0].main) {
            case 'Clouds':
                weatherImg.src = "../images/clouds.png";
                break;
            case 'Clear':
                weatherImg.src = "../images/clear.png";
                break;
            case 'Rain':
                weatherImg.src = "../images/Rain.png";
                break;
            case 'Drizzle':
                weatherImg.src = "../images/Drizzle.png";
                break;
        }
        document.querySelector(".weather-body").style.display = "block";
        document.querySelector(".valid").style.display = "none";

    }

}
searchButton.addEventListener("click", () => {
   const city = searchBox.value.trim();
    if (city !== "") {
        checkWeather(searchBox.value);
    } else {
        alert("Please enter a city name");
    }
})