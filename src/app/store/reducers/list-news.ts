import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { ListNewsActionTypes, GetAllNewsSuccessAction } from '../actions/list-news';

export interface StateUnits {
  newsList: any;
}

const initialState: StateUnits = {
  newsList: '',
};

export function newsListReducer(state = initialState, action: Action) {

  switch (action.type) {
    case ListNewsActionTypes.ActionGetAllNewsSuccess: {
      const payload = (action as GetAllNewsSuccessAction).payload;
      return {
        ...state,
        newsList: payload.news
      };
    }

    default:
      return state;
  }
}

export const getUnits = (state: StateUnits) => state.newsList;

export const getUnitsState = createFeatureSelector<StateUnits>('newsList');
export const gettUnits = createSelector(
  getUnitsState,
  getUnits,
);
