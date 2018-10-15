import { combineReducers } from "redux"; 
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';   
import reducers from './reducers';

const  rootReducer =  combineReducers({
  reducers
})

export default createStore(
  rootReducer,
  compose(
  	applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)