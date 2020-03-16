import { ApiService } from './../../services/api.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of, EMPTY } from 'rxjs';
import { ListNewsActionTypes, GetAllNewsSuccessAction, GetAllNewsAction, GetAllNewsFailureAction, AddNewsAction, AddNewsSuccessAction} from '../actions/list-news';


@Injectable()
export class NewsListEffects {

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    ) {}

  @Effect()
  news$: Observable<Action> = this.actions$
  .pipe(
    ofType(ListNewsActionTypes.ActionGetAllNews),
    switchMap((action: GetAllNewsAction) => {
      return this.apiService
        .getAllItem()
        .pipe(
          map((value: any) => {
            return new GetAllNewsSuccessAction(value);
          }),
          catchError((err) => {
            return of(new GetAllNewsFailureAction(err));
          })
        );
    })
  );

  @Effect()
  newsAdd$: Observable<Action> = this.actions$
  .pipe(
    ofType(ListNewsActionTypes.ActionAddNews),
    switchMap((action: AddNewsAction) => {
      return this.apiService
        .addItemToTable(action.payload.name, action.payload.code, action.payload.manuscript, action.payload.info, action.payload.bibliography)
        .pipe(
          map((value: any) => {
            return new AddNewsSuccessAction();
          }),
          catchError((err) => {
            return EMPTY;
          })
        );
    })
  );


}
