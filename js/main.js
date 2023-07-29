//VARIABLES FOR THE FUNCTIONALITY
const apiKey = "";
const apiUrl = "";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

//FUNCTION TO UPDATE THE DETAILS FROM RESPECTIVE API
async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  var data = await response.json();

  console.log(data);
//targeting the city, temperature, humidity and wind speed class names and updating them based on the API
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

//updating the images displaying weather
  if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "";
  } else if (data.weather[0].main == "Clear"){
    weatherIcon.src = "";
  } else if (data.weather[0].main == "Rain"){
    weatherIcon.src = "";
  } else if (data.weather[0].main == "Drizzle"){
    weatherIcon.src = "";
  } else if (data.weather[0].main == "Mist"){
    weatherIcon.src = "";
  }
}

//linking the search button with the search input field
searchBtn.addEventListener("click", ()=> {
  checkWeather(searchBox.value); 
})

//Calling the function
checkWeather();