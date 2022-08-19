import React from 'react';
// use bootstrap for styling 
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';

const App = () => {
	return (
		<div className='container bg-white p-4 mt-5'>
			<h1>Moabi Sethojane Todo List</h1>
			{/* ADD todo form contain bot the input textbox and submit button */}
			<AddTodoForm />
			{/* TodoList contain the list of our to do list  */}
			<TodoList />
			{/* Total completeItems shows all the complete to do items  */}
			<TotalCompleteItems />
		</div>
	);
};

export default App;
