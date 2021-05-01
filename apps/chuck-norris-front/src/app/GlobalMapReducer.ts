import{ActionReducerMap} from '@ngrx/store'
import * as chuckGlobalReducer from '@chuck-norris-front/redux'

export interface GlobalAppState{
    chuckReducers:chuckGlobalReducer.chuckReducerInterface
}

export const globalReducer:ActionReducerMap<GlobalAppState>={
    chuckReducers:chuckGlobalReducer.ChuckReducer
}