import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberOrbitTodosENV.locationType
});

Router.map(function() {
	this.resource('todos', function(){});
});

export default Router;
