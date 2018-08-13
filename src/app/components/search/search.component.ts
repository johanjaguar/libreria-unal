import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  stateCtrl = new FormControl();
  searchValue = '';
  constructor(
    private searchData: SearchService
  ) { }
  ngOnInit() {
    this.searchData.currentMessage.subscribe(message => this.searchValue = message);
  }
  newMessage() {
    this.searchData.changeMessage(this.searchValue);
  }
}
