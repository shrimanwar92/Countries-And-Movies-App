import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CountriesComponent } from './countries.component';
import { CountryDetailsComponent } from './countrydetails.component';
import { MovieComponent } from './movie.component';

export const routes: Routes = [
  { path: '', redirectTo: 'countries', pathMatch: 'full' },
  { path: 'countries', component: CountriesComponent },
  { path: 'country/:code/details', component: CountryDetailsComponent },
  { path: 'movies', component: MovieComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryDetailsComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
