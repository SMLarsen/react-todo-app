/*jshint esversion: 6 */
import React from 'react';

export default class TodosList extends React.Component {

	render() {
    console.log(this.props);
		return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="What do I need to do?" ref="createInput"/>
        <button>Create</button>
      </form>
			);
	}

  handleCreate(event) {
    event.preventDefault();
    this.props.createTask(this.refs.createInput.value);
    this.refs.createInput.value = '';
  }
}
