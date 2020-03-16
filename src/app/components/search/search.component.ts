import { GetAllNewsAction } from './../../store/actions/list-news';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers/list-news';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.styl']
})
export class SearchComponent implements OnInit {

  public table: any;

  constructor(
    private store: Store<object>
  ) { }

  ngOnInit() {
    this.store.select(fromRoot.gettUnits).subscribe(
      (value) => {
        this.table = value;
      }
    );

    this.store.dispatch(new GetAllNewsAction());
  }

}
