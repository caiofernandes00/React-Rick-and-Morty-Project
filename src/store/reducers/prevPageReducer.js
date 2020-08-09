import { CHARACTERS } from '../types';

const INITIAL_STATE = -1;

const prevPageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHARACTERS.LOAD_SUCCESS:
      return state + 1;

    default:
      return state;
  }
};

export default prevPageReducer;
