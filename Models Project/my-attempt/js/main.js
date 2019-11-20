let Vehicle = Backbone.Model.extend({
  start: function() {
    console.log("vehicle has started...");
  },
  validate: function(attrs) {
    if (!attrs.start) return "Vehicle must start!";
  }
});
