import { combineReducers } from "redux"; 
import { createStore, compose, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';   
import reducers from './reducers';
import reducerToDo from './reducers/reducerToDo';
import reducerCRUD from './reducers/reducerCRUD';
import reducerShoppingCart from './reducers/reducerShoppingCart';
import reducerWeather from './reducers/reducerWeather';

const  rootReducer =  combineReducers({
  reducers, reducerToDo, reducerCRUD, reducerShoppingCart, reducerWeather
})

export default createStore(
  rootReducer,
  compose(
  	// applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)