var apiKey = require('./../.env').apiKey;
import {Tamagotchi} from './../js/tamagotchi.js';

$(document).ready(function() {
  $('#createPet').click(function(event) {
    event.preventDefault();
    $('.gif').empty();
    const name = $('#name').val();
    const pet = new Tamagotchi(name);
    showPetName(name);
    showPetHealth(name);
    pet.setHunger();
    pet.setHappiness();
    pet.setRest();
    setInterval(() => {
      showPetHealth(name);
    }, 1000)
    function showPetName(name) {
      $("#petName").empty();
      $("#petName").append("<h2>"+name+"</h2>");
    }

    function showPetHealth(name) {
      $('#foodLevel').empty();
      $('#happinessLevel').empty();
      $('#restLevel').empty();

      let foodLevel = pet.foodLevel;
      console.log(foodLevel);
      let happinessLevel = pet.happinessLevel;
      console.log(happinessLevel);
      let restLevel = pet.restLevel;
      console.log(restLevel);

      $('#foodLevel').append("<div class='card yellow' style='width:"+foodLevel+"%;'><p>Food</p></div>\n<button class='waves-effect waves-light btn' id='feedPet' type='button' name='feed'>Feed</button>");

      $('#happinessLevel').append("<div class='card light-green' style='width:"+happinessLevel+"%;'><p>Happiness</p></div>\n<button class='waves-effect waves-light btn' id='playWithPet' type='button' name='play'>Play</button>");

      $('#restLevel').append("<div class='card light-blue' style='width:"+restLevel+"%;'><p>Rest</p></div>\n<button class='waves-effect waves-light btn' id='restPet' type='button' name='sleep'>Sleep</button>");

      $('#feedPet').click(function(event) {
        console.log("FED!!!!");
        event.preventDefault();
        pet.feed();
        showPetHealth(name)
      });

      $('#playWithPet').click(function(event) {
        event.preventDefault();
        pet.playgame();
        showPetHealth(name)
      });

      $('#restPet').click(function(event) {
        event.preventDefault();
        pet.sleep();
        showPetHealth(name);

      });

    }

    let keyword = $('#name').val();
    $('#keyword').val("");

    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${apiKey}&limit=25`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {
      let body = JSON.parse(response);
      let number = Math.floor(Math.random() * 25);
      console.log(number);
      let image = body.data[number];
      console.log(body);
      console.log(image);
      // image.data.forEach(function(image) {
          $('.gif').append("<img src="+ image.images.downsized.url+">");
        // },
        // function(error) {
        //   $('.showErrors').text(`There was an error processing your request: ${error.message}`);
        // };
      });

});


});
