import { HttpService, Injectable } from '@nestjs/common';
import { ChuckSearchResult, ChukRandomJoke } from '@chuck-norris-front/interfaces';
const chuckUrl = 'https://api.chucknorris.io/';

@Injectable()
export class ChukBffService {
  constructor(private readonly httpService: HttpService) {}

  /*get all categories
    service */
  async getChuckCategoriesService() {
    let dataCategories: string[] = [];
    await this.httpService
      .get(`${chuckUrl}jokes/categories`)
      .toPromise()
      .then((result) => {
        console.log(result.data);

        dataCategories = result.data;
      });
    return dataCategories;
  }
  /*get a joke by category
    service */
  async getAChuckCategoryService(category: string) {
    let categorySelected: string = '';
    await this.httpService
      .get(`${chuckUrl}jokes/random?category=${category}`)
      .toPromise()
      .then((result) => {
        console.log(result.data);

        categorySelected = result.data;
      });
    return categorySelected;
  }
  /*get a random joke
    service */
  async getAChuckJokeService() {
    let jokeRandom: ChukRandomJoke;
    await this.httpService
      .get(`${chuckUrl}jokes/random`)
      .toPromise()
      .then((result) => {
        console.log(result.data);

        jokeRandom = result.data;
      });
    return jokeRandom;
  }
  /*get a joke by id
    service */
  async getAChuckJokeByIdService(id: string) {
    let jokeById: ChukRandomJoke;
    await this.httpService
      .get(`${chuckUrl}jokes/${id}`)
      .toPromise()
      .then((result) => {
        console.log(result.data);

        jokeById = result.data;
      });
    return jokeById;
  }
  /*get a result by search 
    service */
  async getSearchChuckJokeService(querySearch: string) {
    let jokeSearch: ChuckSearchResult;
    await this.httpService
      .get(`${chuckUrl}jokes/search?query=${querySearch}`)
      .toPromise()
      .then((result) => {
        console.log(result.data);

        jokeSearch = result.data;
      });
    return jokeSearch;
  }
}
