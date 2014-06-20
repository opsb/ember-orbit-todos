import Ember from 'ember';

export default {
	name: 'injectEmberOrbit',
	initialize: function(container, application) {
		Orbit.Promise = Ember.RSVP.Promise;
		application.register('schema:main', EO.Schema);
		application.register('orbit:main', EO.Store);
		application.inject('controller', 'orbit', 'orbit:main');
		application.inject('route', 'orbit', 'orbit:main');
	}
};
