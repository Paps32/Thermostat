'use strict';

function Thermostat() {
this.MAX_LOW_ENERGY_USAGE = 18
this.MINIMUM_TEMP = 10
this.powerSavingMode = true
this.MAX_PSM_ON = 25
this.MAX_PSM_OFF = 32
this.DEFAULT_TEMP = 20
this.temp = this.DEFAULT_TEMP;
};

Thermostat.prototype.currentTemp = function() {
  return this.temp;
  };

Thermostat.prototype.up = function() {
  if (this.isMAXIMUM_TEMP()) {
    return;
  }
    this.temp += 1;

  };

Thermostat.prototype.down = function() {
  if (this.isMINIMUM_TEMP()) {
    return;
  };
      this.temp -= 1;
  };

  Thermostat.prototype.isMINIMUM_TEMP = function() {
        return this.temp === this.MINIMUM_TEMP;

    };

    Thermostat.prototype.isMAXIMUM_TEMP = function() {
      if (this.isPowerSavingOn()) {
        return this.temp === this.MAX_PSM_ON;
      };
        return this.temp === this.MAX_PSM_OFF;

      };

    Thermostat.prototype.isPowerSavingOn = function() {
       return this.powerSavingMode === true;
      };

      Thermostat.prototype.switchPowerSavingModeOff = function() {
         this.powerSavingMode = false;
        };

        Thermostat.prototype.switchPowerSavingModeOn = function() {
           this.powerSavingMode = true;
          };

          Thermostat.prototype.resetTemp = function() {
             this.temp = this.DEFAULT_TEMP;
            };

            Thermostat.prototype.energyUsage = function() {
               if (this.temp < this.MAX_LOW_ENERGY_USAGE) {
                 return 'low-usage';
               } else if (this.temp < this.MAX_PSM_ON) {
                 return 'medium-usage';
               };
               return 'high-usage';

              };
