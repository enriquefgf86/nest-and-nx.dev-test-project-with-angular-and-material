import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Page1LibModule} from '@chuck-norris-front/page1-lib'
import { Service1Service } from 'libs/page1-lib/src/lib/all-for-page1/all-categories/services-page1/service1.service';
import { StoreModule } from '@ngrx/store';
import{StoreDevtoolsModule} from '@ngrx/store-devtools'
import {EffectsModule} from '@ngrx/effects'
import { globalReducer } from './GlobalMapReducer';
import { ChuckEffects } from './chuck.effects';

@NgModule({
  imports: [CommonModule,StoreModule.forRoot(globalReducer, {
    runtimeChecks: {
      strictStateImmutability: false,
      strictActionImmutability: false,
    },
  }),


      StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: true
      }),

      EffectsModule.forRoot([ChuckEffects]),
  


],
  providers:[Service1Service],
  // exports:[Page1LibModule]
})
export class ReduxModule {}
