// // In the first few sections, we do all the coding here.
// // Later, you'll see how to organize your code into separate
// // files and modules.

// var Vehicle = Backbone.Model.extend({

// 	idAttribute: "registrationNumber",

// 	urlRoot: "/api/vehicles",

// 	validate: function(attrs){
// 		if (!attrs.registrationNumber)
// 			return "Vehicle is not valid.";
// 	},

// 	start: function(){
// 		console.log("Vehicle started.");
// 	}
// });

// var Car = Vehicle.extend({
// 	start: function(){
// 		console.log("Car with registration number " + this.get("registrationNumber") + " started.");
// 	}
// });

// var car = new Car({
// 	registrationNumber: "XLI887",
// 	color: "Blue"
// });

// car.unset("registrationNumber");

// if (!car.isValid())
// 	console.log(car.validationError);

// car.set("registrationNumber", "XLI887");

// if (!car.isValid())
// 	console.log(car.validationError);

// car.start();

let Vehicle = Backbone.Model.extend({
  rootUrl: "/api/vehicles",

  defaults: {
    registrationNumber: "0000"
  },

  start: function() {
    console.log(`vehicle started`);
  },
  validate: function(attrs) {
    if (!attrs.registrationNumber) return "must have registration number";
  }
});

let Car = Vehicle.extend({
  start: function() {
    console.log(
      `Car with registration number ${this.get(
        "registrationNumber"
      )} has started!`
    );
  }
});

let car = new Car({ registrationNumber: "1234", color: "blue" });
car.start();
