import { Component, OnInit } from '@angular/core';
import { GetDataService } from './../../services/get-data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchService } from '../../services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class ResultsComponent implements OnInit {
  _libros: Observable<any[]>;
  searchValue: string;

  constructor(
    private searchData: SearchService,
    public _ser: GetDataService,
    public router: Router
  ) { }
  ngOnInit() {
    this.searchValue = '';
    this._libros = this._ser.getJSON();
    console.log(this._libros);
    this.searchData.currentMessage.subscribe( (message) => {
      this.searchValue = message;
      this._libros = this._libros.pipe(
        map(items => items.filter(
          item => ( item.autor || item.titulo || item.palabras__clave ) &&
          ((
            item.autor.indexOf(this.searchValue) !== -1 ||
            item.titulo.indexOf(this.searchValue) !== -1 ||
            item.palabras__clave.indexOf(this.searchValue) !== -1
          ))
        ))
      );
    });
  }

}
