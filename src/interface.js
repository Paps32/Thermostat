//setting default temperature to the top of the screen
$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temp').text(thermostat.temp);
  $('#up').on('click', function() {
    thermostat.up();
    $('#temp').text(thermostat.temp);
  });
  $('#down').on('click', function() {
    thermostat.down();
    $('#temp').text(thermostat.temp);
  });
  $('#psm-on').on('click', function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('On');
  });
  $('#psm-off').on('click', function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('Off');
  });
  $('#reset').on('click', function() {
    thermostat.resetTemp();
    $('#temp').text(thermostat.temp);
  });
})

//
