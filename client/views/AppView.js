// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  template: '<div><input type="text">Insert some text!</div>',
  initialize: function(params){
    // this.UserView = new UserView({model: User});
    this.libraryView = new LibraryView({collection: this.model.get('library')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    // this.model.on('change:currentSong', function(model){
    //   this.playerView.setSong(model.get('currentSong'));
    // }, this);
  },

  render: function(){
    console.log(this.$el.html(this.template));
    console.log(this.libraryView.$el);
    return this.$el.html([this.template,
      this.libraryView.$el
    ]);
  }

});