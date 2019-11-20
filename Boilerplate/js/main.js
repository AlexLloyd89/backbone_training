let Song = Backbone.Model.extend();

let SongView = Backbone.View.extend({
  render: function() {
    let template = _.template($("#songTemplate").html());
    let html = template(this.model.toJSON());
    this.$el.html(html);
    return this;
  }
});

let song = new Song({ title: "song1", plays: 10000 });

let songView = new SongView({ el: "#container", model: song });

songView.render();
