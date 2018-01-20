import * as actionTypes from '../constants/actionTypes';
import uuid from 'uuid';

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

    case actionTypes.UPDATE_LANE:
      return state.map(lane => {
        if (lane.id === action.payload.id) {
          return Object.assign({}, lane, action.payload);
        }

        return lane;
      });

    default:
      return state;
  }
}
