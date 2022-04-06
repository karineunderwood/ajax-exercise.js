'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  // TODO: get the fortune and show it in the #fortune-text div
  // create fetch route /fortune
  //.then(response of the fortune => fortune.json)
  //.then(fortuneData => { doc.queryselector(#fortunediv).innerText = fortuneData
}
  fetch('/fortune')
    .then(fortune => fortune.json())
    .then(fortuneData => {
      document.querySelector('#fortune-text').innerText = fortuneData;
    });
 

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const zipcode = document.querySelector('#zipcode-field').value;

  // TODO: request weather with that URL and show the forecast in #weather-info
  // start with fetch('/weather.JSON', {
  // method: 'POST',
  // body: JSON.stringify(zipcode),
  // headers : {
  // 'Content-Type': 'forecast/json',
  //}
  // } )
//   .then(response => response.json())
//   .then(responseJson => {
//     alert(responseJson.status);
//   });
// });
// }

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.querySelector('#order-form').addEventListener('submit', orderMelons);
