import Ember from 'ember';
import { StackRouteMixin } from 'ember-render-stack';

export default Ember.Route.extend(StackRouteMixin, {

  renderStack: function() {
    this.renderToStack('nav/one', {
      into:   'application',
      outlet: 'navigation'
    });
  }

});