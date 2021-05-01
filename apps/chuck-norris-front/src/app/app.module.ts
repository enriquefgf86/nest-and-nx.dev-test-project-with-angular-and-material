import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@chuck-norris-front/material';
import { OtherImpModule } from '@chuck-norris-front/other-imp';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { globalReducer, ChuckEffects } from '@chuck-norris-front/redux';
import { EffectsModule } from '@ngrx/effects';
import { Service1Service } from 'libs/page1-lib/src/lib/all-for-page1/all-categories/services-page1/service1.service';
import{ReduxModule} from '@chuck-norris-front/redux'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OtherImpModule,
    BrowserAnimationsModule,
    MaterialModule,
    /*
NgrxStore
*/
ReduxModule,

    // StoreModule.forRoot(globalReducer, {
    //   runtimeChecks: {
    //     strictStateImmutability: false,
    //     strictActionImmutability: false,
    //   },
    // }),
    /*
// Ngrx Devtools
// */
//     StoreDevtoolsModule.instrument({
//       maxAge: 25,
//       logOnly: environment.production, 
//     }),
//     /*
// Ngrx effects
// */
//     EffectsModule.forRoot([ChuckEffects]),
  ],
  bootstrap: [AppComponent],
  providers: [Service1Service],
})
export class AppModule {}
