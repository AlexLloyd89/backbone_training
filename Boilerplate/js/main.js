let Song = Backbone.Model.extend();

let Songs = Backbone.Collection.extend({
  model: Song
});

let songs = new Songs();

songs.add(new Song({ title: "song1", genre: "jazz", downlaods: 3 }), { at: 0 });

songs.push(new Song({ title: "song2", genre: "jazz", downlaods: 400 }));

let jazzSongs = songs.where({ genre: "jazz" });

let firstJazzSong = songs.findWhere({ genre: "jazz" });

let topDownloads = songs.filter(function(song) {
  return song.get("downlaods") > 100;
});

console.log(topDownloads);

songs.each(function(song) {
  console.log(song);
});
