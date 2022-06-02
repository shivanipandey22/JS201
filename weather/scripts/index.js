let key = "07deace19b5dc595b7f619fdb7812371";

let container = document.getElementById("container")
let iframe = document.getElementById("gmap_canvas")

async function getData() {
  try {
    let city = document.getElementById("city").value;

    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    );

    let data = await res.json();
console.log(data);

    showWeather(data);
  } catch (err) {
    console.log("err:", err);
  }
}
function showWeather(data) {


  let name = document.createElement("p");
  name.innerText = data.name;

  let temp_max = document.createElement("p");
  temp_max.innerText = `Max_Temp - ${data.main.temp_max}°C`;

  let temp_min = document.createElement("p");
  temp_min.innerText = `Min_Temp - ${data.main.temp_min}°C`;

  let wind = document.createElement("p");
  wind.innerText = `Wind - ${data.wind.speed} KMPH`;

  let clouds = document.createElement("p");
  clouds.innerText = `Clouds - ${data.weather[0].description}`;

  let sunrise= document.createElement("p");
  sunrise.innerText = `Sunrise - ${data.sys.sunrise}`;

  let sunset = document.createElement("p");
 sunset.innerText = `Sunset - ${data.sys.sunset} `;

  
  iframe.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

  container.append(name,temp_min,temp_max,wind,clouds,sunrise,sunset);
}