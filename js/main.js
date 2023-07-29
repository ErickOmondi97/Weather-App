const apiKey = "";
const apiUrl = "";

async function checkWeather(){
  const response = await fetch(apiUrl + `&appid=${apikey}`);
  var data = await response.json();

  console.log(data);
}

checkWeather();