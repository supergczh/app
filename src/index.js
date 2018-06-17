import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './component/reducers/reduser1';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(reducers);
// store.subscribe(renders);
// renders()

// function renders(){
    ReactDOM.render(
    <Provider store={store}>
    {/* <Provider> */}
        <Router>
            <App />
        </Router>
    </Provider>,
    
    document.getElementById('root')

); 
// }


if (module.hot){
     module.hot.accept()
}