import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../components/Todo';

export default configureStore({
	reducer: {
		todos: todoReducer,
	},
});
