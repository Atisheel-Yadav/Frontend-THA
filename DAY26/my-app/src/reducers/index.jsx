import showInput from './showInput'
import {combineReducers} from 'redux'

const rootReducer=combineReducers({
    input:showInput,
});
export default rootReducer;