import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import todoApp from './reducers/reducers';
import { addTodo, fetchPosts } from './actions/actions'
import Home from './pages/Home/Home';
import Count from './pages/Count/Count';
import Animal from './pages/Animal/Animal';
import logo from './logo.svg';
import './App.css';

const loggerMiddleware = createLogger()
const App: React.FC = () => {

  let store: any;
  if(process.env.NODE_ENV === 'development') {
    store = createStore(
      todoApp,
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      )
    )
  } else {
    store = createStore(
      todoApp,
      applyMiddleware(
        thunkMiddleware,
      )
    )
  }
  

  // console.log(store.getState())
  const unsubscribe = store.subscribe(() => console.log(store.getState()))
  store.dispatch(addTodo('Learn about actions'))
  store.dispatch(fetchPosts('1'))
  unsubscribe()
  return (
    <Provider store={store}>
    <HashRouter>
      <Switch>
        {/* <div className="App"> */}
          <Route
              path="/"
              exact
              render={() => <Redirect to="/home" />}
            />
          <Route 
                path="/home"
                exact
                render={() => <Home/>}
              />
          <Route 
            path="/count"
            exact
            render={() => <Count/>}
          />
          <Route 
            path="/animal"
            exact
            render={() => <Animal/>}
          />
        {/* </div> */}
        </Switch>
    </HashRouter>
    </Provider>
  );
}

export default App;
