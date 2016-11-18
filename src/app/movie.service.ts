import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import './rxjs-operators';

@Injectable()
export class MovieService {
  movie = {};
  constructor (private http: Http) {}

  searchMovieByName(query: string) {
    let url = "http://www.omdbapi.com/?t="+ query +"&y=&plot=short&r=json";
    return this.http.get(url)
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