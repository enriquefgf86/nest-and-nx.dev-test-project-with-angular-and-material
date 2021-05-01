import { ChuckItemResult } from '@chuck-norris-front/interfaces';
import { createAction, Action, props } from '@ngrx/store';

/*
For all categories
*/
export const getAllCategoriesFlag = createAction('[Get] getAllCategoriesFlag');
export const gettingAllCategories = createAction(
  '[Get] gettingAllCategories',
  props<{ allCategories: String[] }>()
);
/*
For random joke
*/
export const getRandomJokeFlag=createAction('[Get] getRandomJokeFlag');
export const getRandomJoke=createAction('[Get] getRandomJoke',props<{joke:ChuckItemResult}>());

export const resetModal=createAction('[Get] resetModal')
/*
For joke by category
*/
export const getRandomJokeByCategoryFlag=createAction('[Get] getRandomJokeByCategoryFlag',props<{category:string}>());
export const getRandomJokeByCategory=createAction('[Get] getRandomJokeByCategory',props<{jokeByCategory:ChuckItemResult}>());




