import Ember from 'ember';

var LocalStorageStore = EO.Store.extend({
  	orbitSourceClass: OC.LocalStorageSource,
  	orbitSourceOptions: {
	  namespace: "ember-orbit-todos" // n.s. for localStorage
	}
});

export default {
	name: 'injectStore',
	initialize: function(container, application) {
		Orbit.Promise = Ember.RSVP.Promise;
		application.register('schema:main', EO.Schema);
		
		//// default InMemoryStore ////
		// application.register('store:main', EO.Store);

		//// LocalStorageStore ///
		application.register('store:main', LocalStorageStore); 		

		application.inject('controller', 'store', 'store:main');
		application.inject('route', 'store', 'store:main');
	}
};
