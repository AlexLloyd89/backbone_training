// let Song = Backbone.Model.extend();
// let Songs = Backbone.Collection.extend({
//   model: Song
// });
// let songs = new Songs([
//   new Song({ title: "song1" }),
//   new Song({ title: "song1" }),
//   new Song({ title: "song1" })
// ]);

// let SongView = Backbone.View.extend({
//   render: function() {
//     this.$el.html(this.model.get("title"));
//     return this;
//   }
// });

// let SongsView = Backbone.View.extend({
//   render: function() {
//     this.model.each(song => {
//       let songView = new SongView({ model: song });
//       this.$el.append(songView.render().$el);
//     });
//   }
// });

// let songsView = new SongsView({ el: "#container", model: songs });
// songsView.render();

let Song = Backbone.Model.extend();
let SongView = Backbone.View.extend({
  initialize: function() {
    this.model.on("change", this.render, this);
  },
  render: function() {
    this.$el.html(
      this.model.get("title") + "Listeners: " + this.model.get("listeners")
    );
    return this;
  }
});

let song = new Song({ title: "song1", listeners: "50" });
let songView = new SongView({ el: "#container", model: song });
songView.render();
