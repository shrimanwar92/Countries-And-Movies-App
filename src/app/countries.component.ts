import { Component, OnInit } from '@angular/core';
import { CountryService } from './countries.service';
import { CountryDetailsComponent } from './countrydetails.component';
//import { CountryFilterPipe } from './countryFilterPipe';

@Component({
  selector: 'corc-tweets',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  providers: [CountryService]
  //pipes: [CountryFilterPipe]
  //pipes: [TwitterDateWithTimePipe]
})

export class CountriesComponent implements OnInit {
  errorMessage: string;
  //tweets: Tweet[];
  countries: any[];
  mode = 'Observable';

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countryService.getCountries()
      .subscribe(
         countries => this.countries = countries,
         error =>  this.errorMessage = <any>error);
  }
}
