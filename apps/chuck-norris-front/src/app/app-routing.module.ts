import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '*',
    redirectTo: '/pages/page1',
    pathMatch: 'full',
  },
  {
    path: 'pages/page1',
    loadChildren: () =>
      import('@chuck-norris-front/page1-lib').then((module) => module.Page1LibModule),
  },
  {
    path: 'pages/page2/:jokeId',
    loadChildren: () =>
      import('@chuck-norris-front/page2-lib').then((module) => module.Page2LibModule),
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
