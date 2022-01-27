import {createAction, props} from '@ngrx/store';

export const likePhoto = createAction(
  '[Photo List] Like Photo',
  props<{id: string}>()
);