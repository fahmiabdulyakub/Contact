import {UPDATE_DATA} from 'constants/index';
import {DataUserType} from 'types/DataUserType';

export const updateUser = (payload: DataUserType[]) => ({
  type: UPDATE_DATA,
  payload,
});
