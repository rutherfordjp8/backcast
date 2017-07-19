var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    //console.log(video);
    this.set('id', video.id.videoId);
    this.set('description', video.snippet.description);
    this.set('title', video.snippet.channelTitle);
    this.set('url', 'https://www.youtube.com/embed/' + video.id.videoId);
    this.set('current', false);

  },

  select: function(video) {
    //console.log('in select');
    //console.log(AppView.get('vidPlay'));
    //new VideoPlayerView({el: $('.player'), model: this});
    //this.set('current', !this.get('current'));
    this.trigger('select', this);
  },

  flag: false

});
