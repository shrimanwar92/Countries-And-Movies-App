import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from './countries.service';

@Component({
  selector: 'corc-tweets',
  templateUrl: './countrydetails.component.html',
  styleUrls: ['./countries.component.css'],
  providers: [CountryService]
  //pipes: [TwitterDateWithTimePipe]
})

export class CountryDetailsComponent implements OnInit {
  errorMessage: string;
  //tweets: Tweet[];
  country: any[];
  mode = 'Observable';

  constructor(private countryService: CountryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.countryService.getCountryByCode(this.route.snapshot.params['code'])
      .subscribe(
         country => this.country = country,
         error =>  this.errorMessage = <any>error);
  }
}