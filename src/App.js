import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import { useSelector } from 'react-redux';
import { selectTodo } from './components/Todo';
import Input from './components/Input';

function App() {
	const todo = useSelector(selectTodo);
	return (
		<div className='App'>
			<div className='container'>
				<div className='todo'>
					{todo.map(item => (
						<TodoItem name={item.item} done={item.done} id={item.id} />
					))}
				</div>
				<Input />
			</div>
		</div>
	);
}

export default App;
