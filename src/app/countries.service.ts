import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import './rxjs-operators';

//import { Tweet } from './tweet';
//import { User } from './user';

@Injectable()
export class CountryService {
  constructor (private http: Http) {}

  getCountries(): Observable<any[]> {
    return this.http.get('https://restcountries.eu/rest/v1/all')
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getCountryByCode(code): Observable<any[]> {
    return this.http.get('https://restcountries.eu/rest/v1/alpha?codes=' +code)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }
}
