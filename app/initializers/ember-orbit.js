import Ember from 'ember';

export default {
	name: 'injectStore',
	initialize: function(container, application) {
		Orbit.Promise = Ember.RSVP.Promise;
		application.register('schema:main', EO.Schema);
		application.register('store:main', EO.Store);
		application.inject('controller', 'store', 'store:main');
		application.inject('route', 'store', 'store:main');
	}
};
