import Ember from 'ember';
import StackRoute from 'vendor/render-stack/route-mixin';

export default Ember.Route.extend(StackRoute, {

  renderStack: function() {
    this.renderToStack('nav/one', {
      into:   'application',
      outlet: 'navigation'
    });
  }

});