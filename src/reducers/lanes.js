import * as actionTypes from '../constants/actionTypes';
import uuid from 'uuid';
import update from 'react-addons-update';

const defaultState = [
  {
    id: uuid.v4(),
    name: 'Todo',
    notes: [],
  },
  {
    id: uuid.v4(),
    name: 'In Progress',
    notes: [],
  },
  {
    id: uuid.v4(),
    name: 'Review',
    notes: [],
  },
];

export default function lanes(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CREATE_LANE:
      return state.concat(action.payload);

    default:
      return state;
  }
}
