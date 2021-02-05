import {combineReducers} from 'redux'
import CounterReducers from './CounterReducers'


export const allreducer=combineReducers({counter: CounterReducers})