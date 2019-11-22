// let Vehicle = Backbone.Model.extend({
//   idAttribute: "registrationNumber",

//   urlRoot: "/api/vehicles",

//   validate: function(attrs) {
//     if (!attrs.registrationNumber) return "Vehicle is not valid.";
//   },

//   start: function() {
//     console.log("Vehicle started.");
//   }
// });

// let Vehicles = Backbone.Collection.extend({
//   model: Vehicle
// });

// let Car = Vehicle.extend({
//   start: function() {
//     console.log(
//       "Car with registration number " +
//         this.get("registrationNumber") +
//         " started."
//     );
//   }
// });

// let vehicles = new Vehicles([
//   new Car({ registrationNumber: "XXPP", color: "blue" }),
//   new Car({ registrationNumber: "ABCD", color: "red" }),
//   new Car({ registrationNumber: "DDXX", color: "pink" }),
//   new Car({ registrationNumber: "DDXC", color: "blue" })
// ]);

// let blueCar = vehicles.where({ color: "blue" });
// console.log(blueCar);

// let specificCar = vehicles.findWhere({ registrationNumber: "XXPP" });
// console.log(specificCar);
// vehicles.remove(specificCar);
// console.log("Vehicles as JSON", vehicles.toJSON());

let Vehicle = Backbone.Model.extend({
  idAttribute: "registrationNumber",

  urlRoot: "/api/vehicles",

  validate: function(attrs) {
    if (!attrs.registrationNumber) return "Vehicle is not valid.";
  },

  start: function() {
    console.log("Vehicle started.");
  }
});

let Car = Vehicle.extend({
  start: function() {
    console.log(
      `car with registration number: ${this.get(
        "registrationNumber"
      )} has started!`
    );
  }
});

let Vehicles = Backbone.Collection.extend({
  model: Car
});

let vehicles = new Vehicles([
  new Car({ registrationNumber: "1234", color: "blue" }),
  new Car({ registrationNumber: "4321", color: "blue" }),
  new Car({ registrationNumber: "666", color: "green" })
]);

let colorCar = vehicles.where({ color: "blue" });
console.log(colorCar);
