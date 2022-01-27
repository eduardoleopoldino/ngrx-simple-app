import {createAction, props} from '@ngrx/store';
import { User } from '../users';

export const addUser = createAction('[Users] Add User', props<{ payload: User }>());
export const editUser = createAction('[Users] Edit User', props<{ id: number, updatedName: string }>());
export const deleteUser = createAction('[Users] Delete User', props<{ id: number }>());
export const deleteAllUsers = createAction('[Users] Delete All Users');
