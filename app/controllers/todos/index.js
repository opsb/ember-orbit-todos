import Ember from 'ember';

export default Ember.ArrayController.extend({

	remaining: Ember.computed('@each.isDone', 'model.length', {
    get: function() {
		  return this.get("model.length") - this.get("completed");
    }
	}),

	completed: Ember.computed('@each.isDone', {
    get: function() {
		  return this.filterProperty('isDone', true).get('length');
    }
	}),

	isEmpty: Ember.computed('length', {
    get: function() {
		  return this.get('length') === 0;
    }
	}),

	allAreDone: Ember.computed('@each.isDone', {
    get: function() {
      return !this.get('isEmpty') && this.everyProperty('isDone', true);
    },
    set: function(key, value) {
      this.setEach('isDone', value);
      return value;
    }
	}),

	actions: {
		createTodo: function(title) {
			this.store.add('todo', { title: title });
		},

		clearCompletedTodos: function() {
			this.filterProperty('isDone', true).forEach(this.removeObject, this);
		}
	}

});
