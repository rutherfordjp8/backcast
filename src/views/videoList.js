var VideoListView = Backbone.View.extend({


  initialize: function(coll) {
    // var that = this;

    // _.bindAll(this,'addChild');

    console.log(coll.collection.models);

    this.render();

    this.on('change:Videos', function(vid) {
      this.addChild(vid);
    }, this);

    // _.each(this.collection.models, function(vid) {
    //   console.log(vid)
    //   that.addChild(vid);
    // });

    // console.log(this.collection);
    var that = this;
    _.each(coll.collection.models, function(vid) {
      //console.log(mod);
      that.addChild(vid);
    });


  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
    // new videoListEntryView({
    //   el: this.$('#list'),
    //   collection: this.collection
    // }).render();
  },

  addChild: function(vid) {
    //console.log(vid);
    var entry = new VideoListEntryView({model: vid});
    //console.log(entry);
    this.$el.append(entry.$el);
  },

  template: templateURL('src/templates/videoList.html')

});
