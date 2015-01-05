import { Stack } from 'ember-render-stack';

export default {
  name: 'render-stack',
  initialize: function(container) {
    container.optionsForType('stack', {singleton: true});
    container.register("stack:main", Stack);
  }
};
