var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    console.log(this.model.attributes);
    this.render();

  },

  render: function() {
    console.log('hit');
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
