import Ember from 'ember';

export default Ember.TextField.extend({
	insertNewline: function() {
		var value = this.get('value');

		if (value) {
			this.triggerAction({action: 'createTodo', actionContext: value});
			this.set('value', '');
		}
	}
});
