let Animal = Backbone.Model.extend({
  walk: function() {
    console.log(`Animal walking...`);
  }
});

let Dog = Animal.extend({
  walk: function() {
    Animal.prototype.walk.apply(this);
    console.log(`dog walking...`);
  }
});
let dog = new Dog();
dog.walk();
