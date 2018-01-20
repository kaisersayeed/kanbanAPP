import uuid from 'uuid';
import * as actionTypes from '../constants/actionTypes';

/**
 * Checks if string is valid v4 id
 * @param  {String} id Id to be checked
 * @return {Boolean}
 */
function isV4(id) {
  if (typeof id !== 'string') {
    return false;
  }

  return /^[a-z0-9]{8}-[a-z0-9]{4}-4[a-z0-9]{3}-[a-z0-9]{4}-[a-z0-9]{12}$/.test(id);
}

/**
 * Returns a createLane action
 * @param  {String} name Lane name
 * @return {Object}
 */
function createLane(name) {
  if (typeof name !== 'string') {
    throw new Error(`params ${name}`);
  }

  return {
    type: actionTypes.CREATE_LANE,
    payload: {
      id: uuid.v4(),
      name,
      notes: [],
    },
  };
}

export default {
  createLane
};
