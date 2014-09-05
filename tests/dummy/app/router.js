import Ember from 'ember';

var Router = Ember.Router.extend({
  location: DummyENV.locationType
});

Router.map(function() {
  this.resource("one", function() {
    this.resource("two", function() {
      this.resource("three", function() {
        this.resource("four");
      });
    });
  });
});

export default Router;
