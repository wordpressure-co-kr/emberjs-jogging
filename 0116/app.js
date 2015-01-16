
window.Todos = Ember.Application.create();




//============================== router =================================

Todos.Router.map(function(){
	this.resource('todos', { path: '/' });
});


//============================== model ==================================

Todos.Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});

