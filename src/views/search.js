var SearchView = Backbone.View.extend({


  events: {
    'click .btn': 'search'
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  search: function() {
    //console.log(this.$('input').val());
    this.collection.search(this.$('input').val());

  },

  template: templateURL('src/templates/search.html')

});
