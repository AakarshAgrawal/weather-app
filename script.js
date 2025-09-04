const apiKey = "f262c6693feb8f2f27b1f704d4732ad2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const icon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

if (response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
} else {
var data = await response.json();
    document.querySelector( ".city" ).innerHTML =  data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML = (data.main.humidity)+ " %";
    document.querySelector(".wind").innerHTML = (data.wind.speed)+ " km/h";
   
    document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";
    if(data.weather[0].main == "Clouds"){
      icon.src = "assets/clouds.png";
    }else if (data.weather[0].main == "Clear"){
      icon.src = "assets/clear.png";
    }else if (data.weather[0].main == "Rain"){
      icon.src = "assets/rain.png";
    }else if (data.weather[0].main == "Drizzle"){
      icon.src = "assets/drizzle.png";
    }else if (data.weather[0].main == "Mist"){
      icon.src = "assets/mist.png";
    }
}

    
  
}


searchbox.addEventListener("keydown", (e)=> {
   if (e.key === "Enter") {
      checkWeather(searchbox.value);;
    } 
});



searchbtn.addEventListener("click", ()=> {
checkWeather(searchbox.value);
});
