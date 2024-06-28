import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { UserComponent } from './components/user/user.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'shop', component: ShopComponent, title: 'Shop' },
  { path: 'blogs', component: BlogsComponent, title: 'Blogs' },
  { path: 'user', component: UserComponent, title: 'User' },
  { path: 'products', component: ProductsComponent, title: 'Products' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
