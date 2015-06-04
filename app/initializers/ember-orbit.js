import Ember from 'ember';
import EO from 'ember-orbit';
import Orbit from 'orbit/main';
import LocalStorageSource from 'orbit-common/local-storage-source';

var LocalStorageStore = EO.Store.extend({
  orbitSourceClass: LocalStorageSource,
  orbitSourceOptions: {
    namespace: "ember-orbit-todos" // n.s. for localStorage
  }
});

export function initialize(registry, application) {
  Orbit.Promise = Ember.RSVP.Promise;
  application.register('schema:main', EO.Schema);
  
  //// default InMemoryStore ////
  // application.register('store:main', EO.Store);

  //// LocalStorageStore ///
  application.register('store:main', LocalStorageStore);

  application.inject('controller', 'store', 'store:main');
  application.inject('route', 'store', 'store:main');
}

export default {
  name: 'injectStore',
  initialize: initialize
};
