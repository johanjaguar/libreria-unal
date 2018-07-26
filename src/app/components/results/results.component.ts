import { Component, OnInit } from '@angular/core';
import { GetDataService } from './../../services/get-data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class ResultsComponent implements OnInit {
  _libros: Observable<any[]>;

  constructor(
    public _ser: GetDataService,
  ) { }

  ngOnInit() {
    this._libros = this._ser.getJSON();
    console.log(this._libros);
  }

}
