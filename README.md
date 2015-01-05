# ember-render-stack

Helps render a stack to outlets.

For example, you've got a navigation section in the application template into which you want to render
contextual information.

```handlebars
<div>
  {{outlet "navigation"}}
</div>
<div>
  {{outlet}}
</div>
```

You could achieve this with `Route#render` but will quickly run into the problem that exiting a route
will not re-display content from a parent route.

Eg. `/foo` renders to `navigation` as does `/foo/bar/baz`, but navigating to `/foo/bar` from `/foo/bar/baz`
will end up displaying nothing instead of re-rendering `/foo`'s navigation.

That's what this addon solves.

## Installation

Install as an Ember CLI addon:

```
npm install --save-dev ember-render-stack
```

## Usage

First mixin the `RenderMixin` to your `ApplicationRoute`:

```javascript
import Ember from 'ember';
import { StackRenderMixin } from 'ember-render-stack';

export default Ember.Route.extend(StackRenderMixin);
```

Next add an outlet you want to manage to a layout, eg your `application.hbs`:

```handlebars
<div>
  {{outlet "navigation"}}
</div>
<div>
  {{outlet}}
</div>
```

Finally, mixin the `RouteMixin` to each route you want to render into the stack and call
`renderToStack` for each outlet:

```javascript
import Ember from 'ember';
import { StackRouteMixin } from 'ember-render-stack';

export default Ember.Route.extend(StackRouteMixin, {
  renderStack: function() {
    this.renderToStack('navigation/some-template', {
      into:   'application',
      outlet: 'navigation'
    });
  }
});
```

`renderToStack` takes the same options as the standard [Route#render](http://emberjs.com/api/classes/Ember.Route.html#method_render)
so you can simply replace calls to `render` with `renderToStack`.

## Development

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `ember test`
* `ember test --server`