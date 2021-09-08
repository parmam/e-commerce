import { TEST } from '../constants';

const initialState = {

};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST:

      return 'TEST SUCCESSFULLY';
    default:
      return state;
  }
};

export default rootReducer;
