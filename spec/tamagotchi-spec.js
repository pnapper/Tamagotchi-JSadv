import { Tamagotchi} from './../js/tamagotchi.js';

describe('Tamagotchi', function() {
  let pika = new Tamagotchi("Pika");

  beforeEach(function() {
    pika = new Tamagotchi("Pika")
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(pika.name).toEqual("Pika");
    expect(pika.foodLevel).toEqual(10);
  });

  it('should have a name and a food level of 7 after 3 seconds', function() {
    pika.setHunger();
    expect(pika.name).toEqual("Pika");
    jasmine.clock().tick(3001);
    expect(pika.foodLevel).toEqual(7);
  });

  it('should have a name and a food level of 0 after 10 seconds', function() {
    expect(pika.name).toEqual("Pika");
    pika.setHunger();
    jasmine.clock().tick(10001);
    expect(pika.foodLevel).toEqual(0);
  });

  it('should have a name and dies after 10 seconds of no food', function() {
    expect(pika.name).toEqual("Pika");
    pika.setHunger();
    jasmine.clock().tick(10001);
    expect(pika.petDies()).toEqual(true);
  });

  it('should have a food level increase after feeding', function() {
    expect(pika.name).toEqual("Pika");
    pika.setHunger();
    jasmine.clock().tick(4001);
    pika.feed();
    expect(pika.foodLevel).toEqual(8);
  });

  it('should have a name and a happiness level of 10 when it is created', function() {
    expect(pika.name).toEqual("Pika");
    expect(pika.happinessLevel).toEqual(10);
  });

  it('should have a name and a happiness level of 7 after 3 seconds', function() {
    pika.setHappiness();
    expect(pika.name).toEqual("Pika");
    jasmine.clock().tick(3001);
    expect(pika.happinessLevel).toEqual(7);
  });

  it('should have a name and a happiness level of 0 after 10 seconds', function() {
    expect(pika.name).toEqual("Pika");
    pika.setHappiness();
    jasmine.clock().tick(10001);
    expect(pika.happinessLevel).toEqual(0);
  });

  it('should have a name and dies after 10 seconds of no happiness', function() {
    expect(pika.name).toEqual("Pika");
    pika.setHappiness();
    jasmine.clock().tick(10001);
    expect(pika.petDies()).toEqual(true);
  });

  it('should have a name and a happiness level of 7 after 5 seconds and playing with it for 1 second', function() {
    expect(pika.name).toEqual("Pika");
    pika.setHappiness();
    jasmine.clock().tick(5001);
    pika.playgame();
    expect(pika.happinessLevel).toEqual(7);
  });

  it('should have a name and a rest level of 10 when it is created', function() {
    expect(pika.name).toEqual("Pika");
    expect(pika.restLevel).toEqual(10);
  });

  it('should have a name and a rest level of 7 after 3 seconds', function() {
    pika.setRest();
    expect(pika.name).toEqual("Pika");
    jasmine.clock().tick(3001);
    expect(pika.restLevel).toEqual(7);
  });

  it('should have a name and a rest level of 0 after 10 seconds', function() {
    expect(pika.name).toEqual("Pika");
    pika.setRest();
    jasmine.clock().tick(10001);
    expect(pika.restLevel).toEqual(0);
  });

  it('should have a name and dies after 10 seconds of no rest', function() {
    expect(pika.name).toEqual("Pika");
    pika.setRest();
    jasmine.clock().tick(10001);
    expect(pika.petDies()).toEqual(true);
  });

  it('should have a name and a rest level of 6 after sleeping it', function() {
    expect(pika.name).toEqual("Pika");
    pika.setRest();
    jasmine.clock().tick(6001);
    pika.sleep();
    expect(pika.restLevel).toEqual(6);
  });

});
