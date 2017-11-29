export class Tamagotchi {

  constructor(name) {
      this.name = name;
      this.foodLevel = 100;
      this.happinessLevel = 100;
      this.restLevel = 100;
    }

    setHunger() {
      setInterval(() => {
        this.foodLevel--;
      }, 1000);
    }

    setHappiness() {
      setInterval(() => {
        this.happinessLevel--;
      }, 1000);
    }

    setRest() {
      setInterval(() => {
        this.restLevel--;
      }, 1000);
    }

    petDies() {
      if (this.foodLevel<=0 || this.happinessLevel<=0 || this.restLevel<=0) {
        return true;
      } else if (this.foodLevel>=105 || this.happinessLevel>=105 || this.restLevel>=105) {
        return true;
      } else {
        return false;
      }
    }

    feed() {
      this.foodLevel +=12;
      this.restlevel -=6;
      this.happinessLevel +=2;
    }

    playgame() {
      this.happinessLevel +=12;
      this.restlevel -=7;
      this.foodLevel -=3;

    }

    sleep() {
      this.restLevel +=12;
      this.happinessLevel -=8;
      this.foodLevel -=4;
    }

}
