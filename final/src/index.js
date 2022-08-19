import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import store from the redux folder we created
import store from './redux/store';
// also import provider from react-redux 
import { Provider } from 'react-redux';

ReactDOM.render(
	<React.StrictMode>
	{/* this will link our app to the store and give our components access to the state in our store */}
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
