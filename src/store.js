import CounterReducer from './reducers/CounterReducers'
import {createStore} from 'redux'



const store=createStore(CounterReducer)