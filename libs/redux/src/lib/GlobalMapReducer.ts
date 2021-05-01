import{ActionReducerMap} from '@ngrx/store'
import * as chuckGlobalReducer from './chuck.reducers'

export interface GlobalAppState{
    chuckReducers:chuckGlobalReducer.chuckReducerInterface
}

export const globalReducer:ActionReducerMap<GlobalAppState>={
    chuckReducers:chuckGlobalReducer.ChuckReducer
}