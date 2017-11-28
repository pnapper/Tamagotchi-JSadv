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
      } else {
        return false;
      }
    }

    feed() {
      this.foodLevel +=20;
      this.restlevel -=10;
      this.happinessLevel +=10;
    }

    playgame() {
      this.happinessLevel +=20;
      this.restlevel -=10;
      this.foodLevel -=10;

    }

    sleep() {
      this.restLevel +=20;
      this.happinessLevel -=10;
      this.foodLevel -=10;
    }

}
