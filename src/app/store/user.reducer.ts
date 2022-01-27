import { createReducer, on } from '@ngrx/store';
import { addUser, deleteAllUsers, deleteUser, editUser } from './user.action';

const initialState = [
  { id: 1, name: 'Kevin', },
  { id: 2, name: 'Marvin', },
  { id: 3, name: 'Jerry', },
];

export const userReducer = createReducer(
  initialState,
  on(addUser, (state, { payload }) => ([...state, { id: payload.id, name: payload.name }])),
  on(deleteUser, (state, { id }) => (state.filter(user => user.id !== id))),
  on(editUser, (state, { id, updatedName }) => state.map(user => user.id === id ? { id, name: updatedName } : user)),
  on(deleteAllUsers, () => ([]))
);