var VideoPlayerView = Backbone.View.extend({
  initialize: function() {

    this.listenTo(this.collection, 'select', this.changeVideo);

    // this.listenTo(this.model, "change", function(){
    //   console.log("change vp")
    // });
    // this.model.on('change', function(){
    //   console.log("change vp")
    //   this.changeVideo;
    // }, this);

    this.render();
  },


  render: function() {
    //this.$el.html('<div class="loading">Please select a video</div>');
    // console.log(this, "Video player this");
    console.log(this.model.attributes);
    this.$el.html(this.template(this.model.attributes));

    return this;
  },

  changeVideo: function(vid) {
    this.model = vid;
    this.render();
  },

  template: templateURL('src/templates/videoPlayer.html')

});
