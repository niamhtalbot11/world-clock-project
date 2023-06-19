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

setInterval(updateLosAngelesTime, 1);
setInterval(updateSydneyTime, 1);
setInterval(updateDublinTime,1);