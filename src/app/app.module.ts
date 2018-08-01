import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GetDataService } from './services/get-data.service';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { ResultComponent } from './components/result/result.component';
import { BookComponent } from './components/book/book.component';

const appRoutes: Routes = [
  { path: '', component: ResultsComponent },
  { path: 'libro/:id', component: ResultComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsComponent,
    ResultComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,

    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
