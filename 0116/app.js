
window.Todos = Ember.Application.create();

Todos.ApplicationAdapter = DS.FixtureAdapter.extend();


//============================== router =================================

Todos.Router.map(function(){
	this.resource('todos', { path: '/' });
});


//============================== model ==================================

Todos.Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
{
	id: 1,
	title: 'Learn Ember.js',
	isCompleted: true
},
{
	id: 2,
	title: '...',
	isCompleted: false
},
{
	id: 3,
	title: 'Profit',
	isCompleted: false
}
];
