const searchButton = document.getElementById("searchbutton");
const main = document.getElementById("main");
main.style.display = "none";

searchButton.addEventListener("click", () => {
  const userInput = document.getElementById("userinput").value;
  const temperature = document.getElementById("temperature");
  const humidity = document.getElementById("humidity");
  const pressure = document.getElementById("pressure");
  const status = document.getElementById("status");
  const windSpeed = document.getElementById("windspeed");
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
      userInput
    )}?unitGroup=us&key=KSRVVNHVKGHDEALMD5TEZVDSR&contentType=json`,
    {
      mode: "cors",
    }
  )
    .then((response) => {
      // console.log(reponse.json());
      return response.json();
    })
    .then((response) => {
      main.style.display = "grid";
      temperature.textContent = `Temp:  ${response.currentConditions.temp}`;
      humidity.textContent = `Humidity:  ${response.currentConditions.humidity}`;
      pressure.textContent = `Pressure:  ${response.currentConditions.pressure}`;
      status.textContent = `Condition:  ${response.currentConditions.conditions}`;
      windSpeed.textContent = `Wind Speed:  ${response.currentConditions.windspeed}`;
      console.log(response);
    })
    .catch((error) => {
      console.log("Something went wrong");
    });
});
