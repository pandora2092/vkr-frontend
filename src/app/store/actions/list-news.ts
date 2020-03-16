import { Action } from '@ngrx/store';

export enum ListNewsActionTypes {
  ActionGetAllNews = 'ACTION_GET_ALL_NEWS',
  ActionGetAllNewsSuccess = 'ACTION_GET_ALL_NEWS_SUCCESS',
  ActionGetAllNewsFailure = 'ACTION_GET_ALL_NEWS_FAILURE',
  ActionAddNews = 'ACTION_ADD_NEWS',
  ActionAddNewsSuccess = 'ACTION_ADD_NEWS_SUCCUSS',
}

export class GetAllNewsAction implements Action {
  readonly type = ListNewsActionTypes.ActionGetAllNews;
  public payload: { };

  constructor() {
    this.payload = { };
  }
}

export class GetAllNewsSuccessAction implements Action {
  readonly type = ListNewsActionTypes.ActionGetAllNewsSuccess;
  public payload: { news: any };

  constructor( news: any ) {
    this.payload = { news };
  }
}

export class GetAllNewsFailureAction implements Action {
  readonly type = ListNewsActionTypes.ActionGetAllNewsFailure;
  public payload: { };

  constructor(err: any) {
    this.payload = {
      err,
    };
  }
}

export class AddNewsAction implements Action {
  readonly type = ListNewsActionTypes.ActionAddNews;
  public payload: { name: string,  code: string, manuscript: string, info: string, bibliography: string};

  constructor( name: string,  code: string, manuscript: string, info: string, bibliography: string ) {
    this.payload = { name,  code, manuscript, info, bibliography };
  }
}

export class AddNewsSuccessAction implements Action {
  readonly type = ListNewsActionTypes.ActionAddNewsSuccess;
  public payload: { };

  constructor( ) {
    this.payload = { };
  }
}
