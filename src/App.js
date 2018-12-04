import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

import Landing from './components/pages/Landing';
import Order from './components/pages/Order';

const initialState = {};
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Route exact path="/" component={Landing} />
              <Route path="/order" component={Order} />
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}
