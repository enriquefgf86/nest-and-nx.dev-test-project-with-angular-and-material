import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Service1Service } from 'libs/page1-lib/src/lib/all-for-page1/all-categories/services-page1/service1.service';
import { map, mergeMap } from 'rxjs/operators';
import * as actions from './chuck.actions';

@Injectable()
export class ChuckEffects {
  constructor(
    private chuckActionsObservable: Actions,
    private service: Service1Service
  ) {}

  //  @Effect({dispatch:true})
  //  getAllCategorieseffect=this.chuckActionsObservable.pipe(ofType(actions.getAllCategoriesFlag),
  //  mergeMap(()=>this.service.getAllCategoriesService()))

  getAllCategoriesEffects = createEffect(() =>
    this.chuckActionsObservable.pipe(
      ofType(actions.getAllCategoriesFlag),
      mergeMap(() =>
        this.service
          .getAllCategoriesService()
          .pipe(
            map((cat) => actions.gettingAllCategories({ allCategories: cat }))
          )
      )
    )
  );

  getARandomJokeEffect = createEffect(() =>
    this.chuckActionsObservable.pipe(
      ofType(actions.getRandomJokeFlag),
      mergeMap(() =>
        this.service
          .getAJokeRandom()
          .pipe(
            map((chukJoke) => actions.getRandomJoke({joke: chukJoke }))
          )
      )
    )
  );

  getAJokeByCategoryEffect = createEffect(() =>
  this.chuckActionsObservable.pipe(
    ofType(actions.getRandomJokeByCategoryFlag),
    mergeMap((category) =>
      this.service
        .getAJokeByCategory(category.category)
        .pipe(
          map((chukJoke) => actions.getRandomJoke({joke: chukJoke }))
        )
    )
  )
);

}
