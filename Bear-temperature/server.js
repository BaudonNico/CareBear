
var express = require('express');
var app = express();
var FlowerPower = require('flower-power/index');
var async = require('async');
app.get('/bear', function (req, res) {
  
  res.send('It Works!');             // one line response
  // res.sendfile('index.html');     // or send a webpage you designed
});

var server = app.listen(80, function () {
  console.log('Node Express Webserver Started');
  FlowerPower.discover(function (flowerPower) {
    var hasCalibratedData = false;
    FlowerPower.discover(function (flowerPower) {
      async.series([
        function (callback) {
          flowerPower.on('disconnect', function () {
            console.log('disconnected!');
            process.exit(0);
          });
          flowerPower.on('soilTemperatureChange', function (temperature) {
            console.log('soil temperature = ' + temperature.toFixed(2) + '°C');
			// send temp to server
  			var request = require('request');
  			request.post(
  				'http://192.168.43.136/temp/writeInfos.php?bearTemp='+temperature.toFixed(2),
  				{ json: { b: temperature.toFixed(2) } },
  				function (error, response, body) {
  					if (!error && response.statusCode == 200) {
  						console.log("temperature sent to server")
  					}
  				}
  			);
          });
          flowerPower.on('airTemperatureChange', function (temperature) {
            console.log('air temperature = ' + temperature.toFixed(2) + '°C');
          });
          console.log('connectAndSetup');
          flowerPower.connectAndSetup(callback);
        },
        function (callback) {
          console.log('readSystemId');
          flowerPower.readSystemId(function (error, systemId) {
            console.log('\tsystem id = ' + systemId);
            callback();
          });
        },
        function (callback) {
          console.log('readSerialNumber');
          flowerPower.readSerialNumber(function (error, serialNumber) {
            console.log('\tserial number = ' + serialNumber);
            callback();
          });
        },
        function (callback) {
          console.log('readBatteryLevel');
          flowerPower.readBatteryLevel(function (error, batteryLevel) {
            console.log('battery level = ' + batteryLevel);
            callback();
          });
        },
        function (callback) {
          console.log('readSoilTemperature');
          flowerPower.readSoilTemperature(function (error, temperature) {
            console.log('soil temperature = ' + temperature.toFixed(2) + '°C');
            callback();
          });
        },
        function (callback) {
          console.log('readAirTemperature');
          flowerPower.readAirTemperature(function (error, temperature) {
            console.log('air temperature = ' + temperature.toFixed(2) + '°C');
            callback();
          });
        },
        function (callback) {
          console.log('enableLiveMode');
          flowerPower.enableLiveMode(callback);
        }
		/*
		,
        function (callback) {
          console.log('live mode');
          setTimeout(callback, 5000);
        },
        function (callback) {
          console.log('disableLiveMode');
          flowerPower.disableLiveMode(callback);
        },
        function (callback) {
          console.log('ledPulse');
          flowerPower.ledPulse(callback);
        },
        function (callback) {
          console.log('ledOff');
          flowerPower.ledOff(callback);
        }
		,
        function (callback) {
          console.log('disconnect');
          flowerPower.disconnect(callback);
        }
		*/
      ]);
    });
  });
});

