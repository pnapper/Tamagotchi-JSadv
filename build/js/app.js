(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "Fg47KBAJSWLx2qw9F3OMJqHA9cuDq23r";

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tamagotchi = exports.Tamagotchi = function () {
  function Tamagotchi(name) {
    _classCallCheck(this, Tamagotchi);

    this.name = name;
    this.foodLevel = 100;
    this.happinessLevel = 100;
    this.restLevel = 100;
  }

  _createClass(Tamagotchi, [{
    key: "setHunger",
    value: function setHunger() {
      var _this = this;

      setInterval(function () {
        _this.foodLevel--;
      }, 1000);
    }
  }, {
    key: "setHappiness",
    value: function setHappiness() {
      var _this2 = this;

      setInterval(function () {
        _this2.happinessLevel--;
      }, 1000);
    }
  }, {
    key: "setRest",
    value: function setRest() {
      var _this3 = this;

      setInterval(function () {
        _this3.restLevel--;
      }, 1000);
    }
  }, {
    key: "petDies",
    value: function petDies() {
      if (this.foodLevel <= 0 || this.happinessLevel <= 0 || this.restLevel <= 0) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "feed",
    value: function feed() {
      this.foodLevel += 20;
      this.restlevel -= 10;
      this.happinessLevel += 10;
    }
  }, {
    key: "playgame",
    value: function playgame() {
      this.happinessLevel += 20;
      this.restlevel -= 10;
      this.foodLevel -= 10;
    }
  }, {
    key: "sleep",
    value: function sleep() {
      this.restLevel += 20;
      this.happinessLevel -= 10;
      this.foodLevel -= 10;
    }
  }]);

  return Tamagotchi;
}();

},{}],3:[function(require,module,exports){
'use strict';

var _tamagotchi = require('./../js/tamagotchi.js');

var apiKey = require('./../.env').apiKey;


$(document).ready(function () {
  $('#createPet').click(function (event) {
    event.preventDefault();
    $('.gif').empty();
    var name = $('#name').val();
    var pet = new _tamagotchi.Tamagotchi(name);
    showPetName(name);
    showPetHealth(name);
    pet.setHunger();
    pet.setHappiness();
    pet.setRest();
    setInterval(function () {
      showPetHealth(name);
    }, 1000);
    function showPetName(name) {
      $("#petName").empty();
      $("#petName").append("<h2>" + name + "</h2>");
    }

    function showPetHealth(name) {
      $('#foodLevel').empty();
      $('#happinessLevel').empty();
      $('#restLevel').empty();

      var foodLevel = pet.foodLevel;
      console.log(foodLevel);
      var happinessLevel = pet.happinessLevel;
      console.log(happinessLevel);
      var restLevel = pet.restLevel;
      console.log(restLevel);

      $('#foodLevel').append("<div class='card yellow' style='width:" + foodLevel + "%;'><p>Food</p></div>\n<button class='waves-effect waves-light btn' id='feedPet' type='button' name='feed'>Feed</button>");

      $('#happinessLevel').append("<div class='card light-green' style='width:" + happinessLevel + "%;'><p>Happiness</p></div>\n<button class='waves-effect waves-light btn' id='playWithPet' type='button' name='play'>Play</button>");

      $('#restLevel').append("<div class='card light-blue' style='width:" + restLevel + "%;'><p>Rest</p></div>\n<button class='waves-effect waves-light btn' id='restPet' type='button' name='sleep'>Sleep</button>");

      $('#feedPet').click(function (event) {
        console.log("FED!!!!");
        event.preventDefault();
        pet.feed();
        showPetHealth(name);
      });

      $('#playWithPet').click(function (event) {
        event.preventDefault();
        pet.playgame();
        showPetHealth(name);
      });

      $('#restPet').click(function (event) {
        event.preventDefault();
        pet.sleep();
        showPetHealth(name);
      });
    }

    var keyword = $('#name').val();
    $('#keyword').val("");

    var promise = new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();
      var url = 'http://api.giphy.com/v1/gifs/search?q=' + keyword + '&api_key=' + apiKey + '&limit=25';
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function (response) {
      var body = JSON.parse(response);
      var number = Math.floor(Math.random() * 25);
      console.log(number);
      var image = body.data[number];
      console.log(body);
      console.log(image);
      // image.data.forEach(function(image) {
      $('.gif').append("<img src=" + image.images.downsized.url + ">");
      // },
      // function(error) {
      //   $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      // };
    });
  });
});

},{"./../.env":1,"./../js/tamagotchi.js":2}]},{},[3]);
