import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ChukRandomJoke, ChuckSearchResult } from '@chuck-norris-front/interfaces';
import * as actions from '@chuck-norris-front/redux'
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import {GlobalAppState} from '@chuck-norris-front/redux'


const apiChuckNorris = 'http://localhost:3001/api/chuck-norris/';
const headers = {
  'Content-Type': 'application/json',
};

@Injectable()
export class Service1Service {

  constructor(private httpClient: HttpClient, private Store:Store<GlobalAppState>) {}

  getAllCategoriesService() {
    return this.httpClient.get<string[]>(`${apiChuckNorris}categories/all`, {
      headers: headers,
    })
  }

  getAJokeByCategory(category: string) {
    return this.httpClient.get<ChukRandomJoke>(
      `${apiChuckNorris}categories/${category}`,
      { headers: headers }
    );
  }

  getAJokeById(id: string) {
    return this.httpClient.get<ChukRandomJoke>(
      `${apiChuckNorris}jokes/${id}`,
      { headers: headers }
    );
  }

  getAJokeRandom() {
    return this.httpClient.get<ChukRandomJoke>(
      `${apiChuckNorris}jokes/random`,
      { headers: headers }
    );
  }

  getSearchJokeBy(string: string) {
    return this.httpClient.get<ChuckSearchResult>(
      `${apiChuckNorris}search/${string}`,
      { headers: headers }
    );
  }
}
