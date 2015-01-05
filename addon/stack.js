import Ember from 'ember';

export default Ember.Object.extend({
  setup: function() {
    this.stacks = {};
  }.on("init"),

  names: function() {
    return Object.keys(this.stacks);
  },

  push: function(template, options) {
    options.into = options.into || "application";
    Ember.assert("Outlet name is required when pushing onto a stack", options.outlet);
    var name = [options.into, options.outlet].join(":");
    this.stackFor(name).push({
      template: template,
      options:  options
    });
    return name;
  },

  pop: function(name) {
    this.stackFor(name).pop();
  },

  top: function(name) {
    var stack = this.stackFor(name);
    return stack[stack.length - 1];
  },

  stackFor: function(name) {
    return this.stacks[name] || (this.stacks[name] = []);
  },

  disconnectParams: function(name) {
    var parts = name.split(":");
    return {
      parentView: parts[0],
      outlet: parts[1]
    };
  }
});