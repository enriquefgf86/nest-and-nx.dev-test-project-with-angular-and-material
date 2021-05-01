import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1LibComponent } from './page1-lib.component';

const routes: Routes = [{ path: '', component: Page1LibComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page1LibRoutingModule { }
