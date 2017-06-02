var React = require('react');

//include css
require('./css/addItem.css')

var AddItem = React.createClass({
	handleSubmit: function(e){
		e.preventDefault();
		this.props.onAdd(this.refs.newItem.value);
		this.refs.newItem.value = "";
	},
	
	render: function(){
		return(
			<form id="add-todo" onSubmit={this.handleSubmit}>
				<input type="text" required ref="newItem"/>
				<input type="submit" value="Submit"/>
			</form>
		);
	}
});

module.exports = AddItem;