import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page2LibComponent } from './page2-lib.component';

const routes: Routes = [{ path: '', component: Page2LibComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page2LibRoutingModule { }
