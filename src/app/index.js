var React = require('react');
var ReactDOM = require('react-dom');

//include css
require('./css/index.css');

// Modules
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');

//Create component
var TodoComponent = React.createClass({
	getInitialState: function(){
		return {
			todos: ['code','eat','sleep','code again!']
		}
	},

	onDelete: function(item){
		var updatedTodos = this.state.todos.filter(function(val,i){
			return item !== val;
		});
		this.setState({
			todos: updatedTodos
		});
	},

	onAdd: function(item){
		var addTodos = this.state.todos;
		addTodos.push(item);
		console.log(addTodos)
		this.setState({
			todos: addTodos
		})
	},

	render: function(){
		var todos = this.state.todos;
		todos = todos.map(function(val,i){
			return (
				<TodoItem item={val} key={i} onDelete={this.onDelete}/>
			)
		}.bind(this));

		return(
			<div id="todo-list">
				<p>The life cycle of programmer</p>
				<ul>{todos}</ul>
				<AddItem onAdd={this.onAdd}/>
			</div>
		);
	}
});

ReactDOM.render(<TodoComponent/>,document.getElementById('todo-wrapper'));