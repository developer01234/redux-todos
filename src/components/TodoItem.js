import React from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox } from '@material-ui/core';
import { setCheck } from './Todo';
import './TodoItem.css';

const TodoItem = ({ name, done, id }) => {
	const dispatch = useDispatch();
	const handleCheck = () => {
		dispatch(setCheck(id));
	};

	return (
		<div className='todoItem'>
			<Checkbox
				checked={done}
				color='secondary'
				onChange={handleCheck}
				inputProps={{ 'aria-label': 'secondary checkbox' }}
			/>
			<p className={done && 'todoItem--done'}>{name}</p>
		</div>
	);
};

export default TodoItem;
