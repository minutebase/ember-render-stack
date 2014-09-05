import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

function setup() {
  App = startApp();
}

function teardown() {
  Ember.run(App, 'destroy');
}

function navContains(text, message) {
  equal(find("nav.contextual").text().trim(), text, message);
}

module('Acceptance: Rendering the stack', {
  setup:    setup,
  teardown: teardown
});

test("visiting top of stack renders its item", function() {
  visit("/one");
  andThen(function() {
    navContains('Navigation for "one"');
  });
});

test("a page with no stack item displays the parent item when going down", function() {
  visit("/one");
  visit("/one/two");

  andThen(function() {
    navContains('Navigation for "one"');
  });
});

test("a page with no stack item displays the parent item when going back up", function() {
  visit("/one/two/three");
  visit("/one/two");

  andThen(function() {
    navContains('Navigation for "one"');
  });
});

test("pages deeper within the stack show the deepest item", function() {
  visit("/one");
  visit("/one/two/three");

  andThen(function() {
    navContains('Navigation for "three"');
  });
});