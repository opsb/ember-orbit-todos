import Ember from 'ember';

export default Ember.ArrayController.extend({
	content: [],

	remaining: function() {
		return this.get("model.length") - this.get("completed");
	}.property('@each.isDone', 'model.length'),

	completed: function(){
		return this.filterProperty('isDone', true).get('length');
	}.property('@each.isDone'),

	isEmpty: function() {
		return this.get('length') === 0;
	}.property('length'),

	allAreDone: function(key, value) {
		if (arguments.length === 2) {
			this.setEach('isDone', value);

			return value;
		} else {
			return !this.get('isEmpty') && this.everyProperty('isDone', true);
		}
	}.property('@each.isDone'),

	actions: {
		createTodo: function(title) {
			this.store.add('todo', { title: title });
		},

		clearCompletedTodos: function() {
			this.filterProperty('isDone', true).forEach(function(todo) {
				todo.remove();
			}, this);
		}
	}
});
