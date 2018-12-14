import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './RootReducer';

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// )

// function reducer(state, action){
//   alert('test');
//   console.log(action);
//   return 'Store';
// }

// const action = {
//   type: 'changeState',
//   payload: {
//     newState: 'new State'
//   }
// };
//
// store.dispatch(action);

ReactDOM.render((
  <Router>
    <Provider>
      <App />
    </Provider>
  </Router>),
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
