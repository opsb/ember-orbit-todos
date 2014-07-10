import Ember from 'ember';
import Orbit from 'orbit';
import LocalStorageSource from 'orbit-common/local-storage-source';
import EO from 'ember-orbit';

var LocalStorageStore = EO.Store.extend({
  orbitSourceClass: LocalStorageSource,
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
