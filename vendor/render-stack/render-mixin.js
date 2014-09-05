import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    didTransition: function() {
      var stack = this.container.lookup("stack:main");
      var _this = this;
      var item;

      stack.names().forEach(function(name) {
        item = stack.top(name);
        if (item) {
          _this.render(item.template, item.options);
        } else {
          _this.disconnectOutlet({outlet: item.options.outlet, parentView: item.options.into});
        }
      });
    }
  }
});