import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page1LibRoutingModule } from './page1-lib-routing.module';
import { Page1LibComponent } from './page1-lib.component';
import { OtherImpModule } from '@chuck-norris-front/other-imp';
import { MaterialModule } from '@chuck-norris-front/material';
import { AllCategoriesComponent } from './all-for-page1/all-categories/all-categories.component';
import { ModalJokeComponent } from './all-for-page1/all-categories/modal-joke/modal-joke.component';
import { ModalSearchComponent } from './all-for-page1/all-categories/modal-search/modal-search.component';
import { Service1Service } from './all-for-page1/all-categories/services-page1/service1.service';

@NgModule({
  declarations: [
    Page1LibComponent,
    AllCategoriesComponent,
    ModalJokeComponent,
    ModalSearchComponent,
  ],
  imports: [
    CommonModule,
    Page1LibRoutingModule,
    OtherImpModule,
    MaterialModule,
  ],
  exports: [
    Page1LibComponent,
    OtherImpModule,
    MaterialModule,
    AllCategoriesComponent,
    ModalJokeComponent,
    ModalSearchComponent,
  ],
  providers:[Service1Service]
})
export class Page1LibModule {}
