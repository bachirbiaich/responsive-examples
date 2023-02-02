import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'flexbox',
    loadComponent: () => import('./css-flexbox/css-flexbox.component').then(mod => mod.CssFlexboxComponent)
  },
  {
    path: 'grid',
    loadComponent: () => import('./css-grid/css-grid.component').then(mod => mod.CssGridComponent)
  },
  {
    path: 'bootstrap',
    loadComponent: () => import('./bootstrap/bootstrap.component').then(mod => mod.BootstrapComponent)
  },
  {
    path: 'tailwind',
    loadComponent: () => import('./tailwind/tailwind.component').then(mod => mod.TailwindComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
