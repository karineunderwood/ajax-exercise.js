'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  // TODO: get the fortune and show it in the #fortune-text div
  // create fetch route /fortune
  //.then(response of the fortune => fortune.json)
  //.then(fortuneData => { doc.queryselector(#fortunediv).innerText = fortuneData
}
  fetch('/fortune')
    .then(fortune => fortune.text())
    .then(fortuneData => {
      document.querySelector('#fortune-text').innerText = fortuneData;
    });
 

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const zipcode = document.querySelector('#zipcode-field').value;

    //fetch uses get method to grab the key value pair of zipcode at the weather.json route
    fetch(`/weather.json?zipcode=${zipcode}`)
      //once you fetch the zipcode then turn the response into json
      .then((response) => response.json())
      //once you get the zipcode as json then grab the innerhtml at the weather info tag and turn it forecast data
      .then((jsonData) => {
        document.querySelector('#weather-info').innerHTML = jsonData.forecast;
      });
    }


document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();
  // fetch(`/order-melons.json?melon=${melon_type}`)
    const formInputs = {
      melon: document.querySelector('#melon-type-field').value,
      qty: document.querySelector('#qty-field').value,
    };
    fetch('/order-melons', {
      method: 'POST',
      body: JSON.stringify(formInputs),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then(bob);
    }
  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

document.querySelector('#order-form').addEventListener('submit', orderMelons);
