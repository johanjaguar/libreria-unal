import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get('https://johanjaguar.github.io/libreria-unal/assets/data/books.json');
  }
}
