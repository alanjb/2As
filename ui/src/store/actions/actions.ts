import * as ActionTypes from './action-types';
import { action } from 'typesafe-actions';

export const inviteNewUserRequest = () => action(ActionTypes.INVITE_NEW_USER_REQUEST);
// export const inviteNewUserSuccess  = (invitedUserData: invitedUser) =>
//   action(ActionTypes.INVITE_NEW_USER_SUCCESS, { invitedUserData });