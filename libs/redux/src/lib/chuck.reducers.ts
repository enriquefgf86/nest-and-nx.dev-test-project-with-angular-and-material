import { ChuckItemResult } from '@chuck-norris-front/interfaces';
import { createReducer, on } from '@ngrx/store';
import * as actions from './chuck.actions';

export interface chuckReducerInterface {
  allCategoriesRetrieved: String[];
  workingOnData: boolean;
  jokeRandomRetrieved: ChuckItemResult;
  workingOnData1: Boolean;
  workingOnData2: Boolean;
  jokeByCategory: ChuckItemResult;
  category: string;
}

export const chuckInitialState: chuckReducerInterface = {
  allCategoriesRetrieved: [],
  workingOnData: false,
  jokeRandomRetrieved: null,
  workingOnData1: false,
  workingOnData2: false,
  jokeByCategory: null,
  category: '',
};

const _chuckReducer = createReducer(
  chuckInitialState,
  /*
  For all categories
*/
  on(actions.getAllCategoriesFlag, (state) => ({
    ...state,
    workingOnData: true,
  })),

  on(actions.gettingAllCategories, (state, { allCategories }) => ({
    ...state,
    allCategoriesRetrieved: {
      ...(state.allCategoriesRetrieved = []),
      ...allCategories,
    },
    workingOnData: false,
  })),
  /*
For random joke
*/
  on(actions.getRandomJokeFlag, (state) => ({
    ...state,
    workingOnData1: true,
  })),

  on(actions.getRandomJoke, (state, { joke }) => ({
    ...state,
    workingOnData1: false,
    jokeRandomRetrieved: joke,
  })),

  /*
For joke by category
*/
  on(actions.getRandomJokeByCategoryFlag, (state, { category }) => ({
    ...state,
    category: category,
    workingOnData2: true,
  })),

  on(actions.getRandomJokeByCategory, (state, { jokeByCategory }) => ({
    ...state,
    workingOnData2: false,
    jokeRandomRetrieved: jokeByCategory,
  })),

  /*
resetting values
*/
  on(actions.resetModal, (state) => ({
    ...state,
    jokeRandomRetrieved: null,
    workingOnData1: false,
  }))
);
export function ChuckReducer(state, action) {
  return _chuckReducer(state, action);
}
