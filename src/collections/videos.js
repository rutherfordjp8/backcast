var Videos = Backbone.Collection.extend({

  model: Video,

  initialize: function() {

  },

  url: 'https://www.googleapis.com/youtube/v3/search',

  search: function(query) {
    var that = this;
    console.log(this);
    this.fetch({
      data: {
        part: 'snippet',
        key: 'AIzaSyC-0ZjLTVNux1_CiggWOo-WdI_EkmYtu5I',
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true',
      },

      success: function(data) {
        that.refresh(data);
        console.log(data);
      }
    });
  },

  parse: function(response) {
    return response.items;
  },

  refresh: function(data) {
    console.log(this);
    // this.remove(this.at(1));
    // this.add(data.models[0], {at: 1});
  }

});
