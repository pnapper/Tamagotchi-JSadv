import { Tamagotchi} from './../tamagotchi.js';

describe('Tamagotchi', function() {
  let pika = new Tamagotchi("Pika");

  beforeEach(function() {
    jasmine.clock().install();
    pika.setHunger();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(pika.name).toEqual("Pika");
    expect(pika.foodLevel).toEqual(10);
  });

});
