// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.resource('about');
  this.resource('posts', function() {
    this.resource('post', {
      path: ':post_id'
    });
  });
});
