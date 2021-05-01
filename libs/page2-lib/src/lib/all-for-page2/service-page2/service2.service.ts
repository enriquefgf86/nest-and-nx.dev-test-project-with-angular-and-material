import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ChukRandomJoke, ChuckSearchResult } from '@chuck-norris-front/interfaces';


const apiChuckNorris = 'http://localhost:3001/api/chuck-norris/';
const headers = {
  'Content-Type': 'application/json',
};

@Injectable()
export class Service2Service {

  constructor(private httpClient: HttpClient) {}

  getAllCategoriesService() {
    return this.httpClient.get<string[]>(`${apiChuckNorris}categories/all`, {
      headers: headers,
    });
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
