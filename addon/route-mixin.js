import Ember from 'ember';

export default Ember.Mixin.create({

  // override to render the stack items for this page
  renderStack() {},

  // TODO - convert activate/deactivate to using events instead of hooks
  // https://github.com/emberjs/ember.js/issues/4923

  activate: function() {
    this.setupStack();
  },

  deactivate: function() {
    this.teardownStack();
  },

  setupStack: function() {
    this.stacked = [];
    this.renderStack();
  },

  teardownStack: function() {
    var stack = this.container.lookup("stack:main");
    this.stacked.forEach(function(name) {
      stack.pop(name);
    });
    this.stacked = [];
  },

  renderToStack: function(template, options) {
    var stack = this.container.lookup("stack:main");
    var name  = stack.push(template, options);
    this.stacked.push(name);
  }
});