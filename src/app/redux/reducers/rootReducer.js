import {combineReducers } from 'redux'
import cardReducer from './cardReducer'
import appReducer from './appReducer'

export default  combineReducers({
card:cardReducer,
app:appReducer
})