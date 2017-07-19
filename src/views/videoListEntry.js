var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.render();
    this.trigger('click: title', this.model.select);
  },

  select: function() {
    console.log('in select');
  },

  events: {
    'click .video-list-entry-title': 'changeVideo'
  },

  changeVideo: function() {

    this.model.select(this.model.attributes);
  },

  render: function() {
    //console.log(this.model.attributes);
    //this.$el.html(this.template({title: this.model.get('title')}));
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
