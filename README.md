# Ember-orbit-todos

This is an example app for ember-orbit with ember-cli. Out of the box it's configured to use local-storage but you can easily switch it to in-memory as well (see app/initializers/ember-orbit.js).


Gotchas
-------

### ember-cli
Note that you need to run 

$ npm rm ember-cli-ember-data --save-dev

to remove ember-data as a dependency otherwise it will conflict with ember-orbit


## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://iamstef.net/ember-cli/](http://iamstef.net/ember-cli/).
