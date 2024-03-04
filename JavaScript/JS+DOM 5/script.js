console.log("Namaste babber");

const API_KEY = "b708af5d9496c60d275ff64a108c088f";
// async function showWhether() {
//   try {
//     let city = "goa";
//     const response = fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
//     );
//     const data = await (await response).json();
//     //   console.log("whether data:" + data);
//     console.log("whether data:", data);

//     //   let newPara = document.createElement("p");
//     //   newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
//     //   document.body.appendChild(newPara);
//   } catch (e) {
//     console.log("Error");
//   }
// }

/*
function renderWhetherInfo(data) {
  let newPara = document.createElement("p");
  newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
  document.body.appendChild(newPara);
}
async function getCustomWhetherDetails() {
  try {
    let latitude = -45.1233;
    let longitude = 23.1233;
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );

    let data = await result.json();
    console.log(data);
    renderWhetherInfo(data);
  } catch (e) {
    console.log("Error", e);
  }
}
getCustomWhetherDetails();
*/

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     console.log("No GeoLoaction Support");
//   }
// }

// function showPosition(position) {
//   let lat = position.coords.latitude;
//   let longi = position.coords.longitude;
//   console.log(lat);
//   console.log(longi);
// }
// getLocation();
const x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}
