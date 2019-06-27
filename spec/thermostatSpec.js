'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('Default settings', function() {
    it('starts at 20 degrees', function() {
      expect(thermostat.currentTemp()).toEqual(20);
    });

    it('minimum temperature is 10 degrees', function() {
      for (var i = 0; i < 11; i++) {
        thermostat.down();
      }
      expect(thermostat.currentTemp()).toEqual(10);
    });
  });

  describe('Adjust temperature', function() {
    it('increases temperature with up', function() {
      thermostat.up();
      expect(thermostat.currentTemp()).toEqual(21);
    });

    it('decreases temperature with down', function() {
      thermostat.down();
      expect(thermostat.currentTemp()).toEqual(19);
    });

    it('reset temperature to 20 degrees', function() {
      for (var i = 0; i < 3; i++) {
        thermostat.up();
      }
      thermostat.resetTemp();
      expect(thermostat.currentTemp()).toEqual(20);
    });
  });

  describe('Power saving mode', function() {
    describe('On', function() {
      it('turns power saving mode on by default', function() {
        expect(thermostat.isPowerSavingOn()).toBe(true);
      });

      it('turns power saving mode on', function() {
        thermostat.switchPowerSavingModeOff();
        expect(thermostat.isPowerSavingOn()).toBe(false);
        thermostat.switchPowerSavingModeOn();
        expect(thermostat.isPowerSavingOn()).toBe(true);
      });

      it('power saving mode maximum set to 25 degrees', function() {
        for (var i = 0; i < 6; i++) {
          thermostat.up();
        }
        expect(thermostat.currentTemp()).toEqual(25);
      });
    });

    describe('Off', function() {
      it('turns power saving mode off', function() {
        thermostat.switchPowerSavingModeOff();
        expect(thermostat.isPowerSavingOn()).toBe(false);
      });

      it('power saving mode maximum when off set to 32 degrees', function() {
        thermostat.switchPowerSavingModeOff();
        for (var i = 0; i < 13; i++) {
          thermostat.up();
        }
        expect(thermostat.currentTemp()).toEqual(32);
      });
    });
  });

  describe('energy-usage', function() {
    it('low energy usage', function() {
      for (var i = 0; i < 3; i++) {
       thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });

    it('medium energy usage', function() {
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });

    it('high energy usage', function() {
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 6; i++) {
       thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });
});
