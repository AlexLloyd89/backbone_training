let Vehicle = Backbone.Model.extend({
  urlRoot: "/api/vehicles",
  start: function() {
    console.log("vehicle has started...");
  },
  validate: function(attrs) {
    if (!attrs.start) return "Vehicle must start!";
  },
  defaults: {
    registrationNumber: "default"
  }
});

let Car = Vehicle.extend({
  start: function() {
    console.log(
      `car with registration number ${this.get(
        "registrationNumber"
      )} has started`
    );
  }
});

let car = new Car({
  color: "Blue",
  registrationNumber: "this worked!"
});

car.start();
