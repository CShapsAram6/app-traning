import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { DetalComponent } from './detal/detal.component';

const _router: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    children: [{ path: 'detal', component: DetalComponent }],
  },
];
@NgModule({
  declarations: [ProductsComponent, DetalComponent],
  imports: [CommonModule, RouterModule.forChild(_router)],
})
export class ProductsModule {}
