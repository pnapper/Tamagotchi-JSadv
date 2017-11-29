var apiKey = require('./../.env').apiKey;
import {Tamagotchi} from './../js/tamagotchi.js';

$(document).ready(function() {
  $('#createPet').click(function(event) {
    event.preventDefault();
    $('#createPet').hide();
    $('#nameLabel').hide();
    $('#name').hide();
    // startTimer();

    let name = $('#name').val();
    const pet = new Tamagotchi(name);
    DisplayGIF(name);
    showPetName(name);
    showPetHealth(name);
    pet.setHunger();
    pet.setHappiness();
    pet.setRest();
    let myInterval = setInterval(() => {
      showPetHealth(name);
      checkPetHealth(name);
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

      $('#foodLevel').append("<div class='card yellow' style='width:"+foodLevel+"%;'><p>Food ||  "+foodLevel+"</p></div>\n<button class='waves-effect waves-light btn' id='feedPet' type='button' name='feed'>Feed</button>");

      $('#happinessLevel').append("<div class='card light-green' style='width:"+happinessLevel+"%;'><p>Happiness ||  "+happinessLevel+"</p></div>\n<button class='waves-effect waves-light btn' id='playWithPet' type='button' name='play'>Play</button>");

      $('#restLevel').append("<div class='card light-blue' style='width:"+restLevel+"%;'><p>Rest ||  "+restLevel+"</p> </div>\n<button class='waves-effect waves-light btn' id='restPet' type='button' name='sleep'>Sleep</button>");

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

    function checkPetHealth(name) {
      if(pet.petDies() == true) {
        let dead = "game over";
        clearInterval(myInterval);
        $('#petHealth').empty();
        DisplayGIF(dead);
        // console.log("time"+time);
        $('#petHealth').append("<h1>Game Over! "+name+" has died</h1><Your Time: x seconds");
      }
    }

    // function startTimer() {
    //   let startTime = new Date();
    // };
    //
    // function endTimer() {
    //   let endTime = new Date();
    //   var timeDiff = endTime - startTime; //in ms
    //   // strip the ms
    //   timeDiff /= 1000;
    //
    //   // get seconds
    //   let seconds = Math.round(timeDiff);
    //   return seconds;
    //   console.log(seconds + " seconds");
    // }

    function DisplayGIF(name) {
      $('.gif').empty();
      let promise = new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        let url = `http://api.giphy.com/v1/gifs/search?q=${name}&api_key=${apiKey}&limit=25`;
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
    }
});
});
