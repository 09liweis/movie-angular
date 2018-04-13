import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Movies } from '../models/movies';
import { Movie } from '../models/movie';

@Injectable()
export class TvService {
    
    private baseUrl = 'https://api.themoviedb.org/3/tv/';
    private apiKey = '?api_key=8109b23cc9abaf02cf3c699ec62ccc19';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }
  
    getTvs(type: String, page: number): Promise<Movies> {
        const url = this.baseUrl + type + this.apiKey + '&page=' + page;
        const tvs = this.http.get(url)
                        .toPromise()
                        .then(response => response.json() as Movies)
                        .catch(this.handleError);
        return tvs;
    }
    
    getDetail(id: number) {
        const url = this.baseUrl + id + this.apiKey;
        const tv = this.http.get(url).toPromise().then(res => res.json()).catch(this.handleError);
        return tv;
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
