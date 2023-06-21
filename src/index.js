function updateSydneyTime(){
    let sydneyElement = document.querySelector("#sydney");
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");

    let sydneyTimezone = moment()
    .tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTimezone.format("dddd, MMMM D, YYYY");
    sydneyTimeElement.innerHTML = sydneyTimezone.format("h:mm:ss");
}

function updateLosAngelesTime() {
    let losAngelesElement= document.querySelector("#los-angeles");
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");

    let losAngelesTimezone = moment()
.tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTimezone.format("dddd, MMMM D, YYYY");
losAngelesTimeElement.innerHTML = losAngelesTimezone.format("h:mm:ss");
}

function updateDublinTime(){
    let dublinElement = document.querySelector("#dublin");
    let dublinDateElement = dublinElement.querySelector(".date");
    let dublinTimeElement = dublinElement.querySelector(".time")

let dublinTimezone = moment()
.tz("Europe/Dublin");

dublinDateElement.innerHTML = dublinTimezone.format("dddd, MMMM D, YYYY");
dublinTimeElement.innerHTML = dublinTimezone.format("h:mm:ss");
}

 function showCity(event){
    let cityTimeZone= event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
      }
    let cityName = cityTimeZone.replace("_"," ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
        citiesElement.innerHTML = `
        <div class="city row">${cityName}</div>
        <div class="row">
        <div class="date col">${cityTime.format("MMMM D, YYYY")}</div>
        <div class="time col">${cityTime.format("h:mm:ss")}</div>
        </div>
        
        <div class="homeLink"><a href="index.html">All cities❤️</a></div>
        `;
 }
 

let citiesSelectElement = document.querySelector("#selectCity");
citiesSelectElement.addEventListener("change", showCity);


setInterval(updateLosAngelesTime, 1);
setInterval(updateSydneyTime, 1);
setInterval(updateDublinTime,1);