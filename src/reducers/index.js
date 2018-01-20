import { combineReducers } from 'redux';
import notesReducer from './notes';
import lanesReducer from './lanes';

export default combineReducers({
  lanes: lanesReducer,
  notes: notesReducer
});
