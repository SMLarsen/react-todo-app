import React from 'react';

const todos = [
{
    task: 'make React tutorial',
    isCompleted: false
},
{
    task: 'eat dinner',
    isCompleted: true
}
];

export default class App extends React.Component {
	render () {
		return (
			<div>
				<h1>React Todo App</h1>
			</div>
			);
	}
}