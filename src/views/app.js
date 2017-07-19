var AppView = Backbone.View.extend({

  el: '#app',

  videos: null,

  initialize: function() {

    var videoModels = window.exampleVideoData;
    this.videos = new Videos(videoModels);

    this.listenTo(this.videos, 'sync', function(e) {
      console.log(e);
      console.log(this.videos);
      this.render();
    });



    // videos.on('change', function(val){
    //   console.log("app change");
    //   console.log(val);
    //   this.vidPlay = val;
    // });
    this.render();
  },


  render: function() {
    this.$el.html(this.template());

    new VideoListView({el: this.$('.list'), collection: this.videos});

    new VideoPlayerView({el: this.$('.player'), model: this.vidPlay, collection: this.videos});

    new SearchView ({el: this.$('.search'), collection: this.videos}).render();

    return this;
  },

  vidPlay: new Video(window.exampleVideoData[0]),

  template: templateURL('src/templates/app.html')

});

