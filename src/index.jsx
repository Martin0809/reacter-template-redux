import React from 'react';
import ReactDom from 'react-dom';
import { Route } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import './styles';

import App from './containers/App';

import * as reducers from './reducers';

const history = createHistory();

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

const store = createStore(
  reducer,
  applyMiddleware(routerMiddleware(history), thunk)
);

const render = Component => {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route component={Component} />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const nextApp = require('./containers/App').default;

    render(nextApp);
  });
}
