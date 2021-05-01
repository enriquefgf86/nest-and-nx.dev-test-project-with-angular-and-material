import { Controller, Get, Param } from '@nestjs/common';
import { ChukBffService } from './chuk-bff.service';

@Controller('chuck-norris')
export class ChukBffController {
  constructor(private chuckServices: ChukBffService) {}

  /* all categories
    method */
  @Get('/categories/all')
  getChuckCategories() {
    return this.chuckServices.getChuckCategoriesService();
  }

  /* selected category
    method */
  @Get('/categories/:category')
  getChuckACategory(@Param('category') category: string) {
    return this.chuckServices.getAChuckCategoryService(category);
  }

  /* search
    method */
  @Get('/search/:querySearch')
  getChuckSearchQuery(@Param('querySearch') querySearch: string) {
    return this.chuckServices.getSearchChuckJokeService(querySearch);
  }

  /* random jokes
    method */
  @Get('/jokes/random')
  getChuckAJoke() {
    return this.chuckServices.getAChuckJokeService();
  }

  /* joke by id
    method */
  @Get('/jokes/:jokeId')
  getChuckAJokeById(@Param('jokeId') jokeId: string) {
    return this.chuckServices.getAChuckJokeByIdService(jokeId);
  }
}
