import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
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
