import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page2LibRoutingModule } from './page2-lib-routing.module';
import { Page2LibComponent } from './page2-lib.component';
import { OtherImpModule } from '@chuck-norris-front/other-imp';
import { MaterialModule } from '@chuck-norris-front/material';
import { SelectedJokeComponent } from './all-for-page2/selected-joke/selected-joke.component';
import { Service2Service } from './all-for-page2/service-page2/service2.service';
// import { SelectedJokeModule} from '@chuck-norris-front/selected-joke';


@NgModule({
  declarations: [Page2LibComponent,SelectedJokeComponent],
  imports: [
    CommonModule,
    Page2LibRoutingModule,
    OtherImpModule,
    MaterialModule,
  ],
  exports: [
    Page2LibComponent,
    SelectedJokeComponent,
    OtherImpModule,
    MaterialModule,
  ],
  providers:[Service2Service]
})
export class Page2LibModule {}
