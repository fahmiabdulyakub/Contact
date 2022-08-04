import {Data, UPDATE_DATA} from 'constants/index';
import {DataUserType} from 'types/DataUserType';

const initialstate = {
  user: Data,
};

type Action = {
  type: string;
  payload?: DataUserType[];
};

export default (state: any = initialstate, action: Action) => {
  switch (action.type) {
    case UPDATE_DATA:
      return Object.assign({}, state, {
        user: action.payload,
      });
    default:
      return state;
  }
};
