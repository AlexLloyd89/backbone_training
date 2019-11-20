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

let Vehicles = Backbone.Collection.extend({
  Model: Vehicle
});

let Car = Vehicle.extend({
  start: function() {
    `the car with registration number: ${this.model.get(
      "registrationNumber"
    )}has started`;
  }
});

let vehicles = new Vehicles([
  new Car({ registrationNumber: "1234", color: "blue" }),
  new Car({ registrationNumber: "4321", color: "blue" }),
  new Car({ registrationNumber: "666", color: "green" })
]);

let VehicleView = Backbone.View.extend({
  tagName: "li",
  className: "vehicle",

  events: {
    "click .delete": "onDelete"
  },
  render: function() {
    let source = $("#vehicleTemplate").html();
    let template = _.template(source);

    this.$el.html(template(this.model.toJSON()));

    this.$el.attr("data-color", this.model.get("color"));

    return this;
  },
  onDelete: function(car) {
    console.log(car);
    this.remove();
  }
});

var VehiclesView = Backbone.View.extend({
  tagName: "ul",

  render: function() {
    this.collection.each(function(vehicle) {
      var vehicleView = new VehicleView({ model: vehicle });
      this.$el.append(vehicleView.render().$el);
    }, this); // note the reference to this here. When you set
    // the "this" pointer here (as the second argument to the
    // each method, you'll be able to access "this" inside the
    // callback function in the each method:
    //
    // this.$el.append(...)

    return this;
  }
});

var vehiclesView = new VehiclesView({ collection: vehicles });
$("#container").html(vehiclesView.render().$el);
var vehiclesView = new VehiclesView({ collection: vehicles });
$("#container").html(vehiclesView.render().$el);
