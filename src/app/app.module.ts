import { NgModule, importProvidersFrom } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './components/products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    HomeComponent,
    BlogsComponent,
    UserComponent,
  ],
  imports: [ProductsModule, BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [provideClientHydration(), importProvidersFrom(HttpClientModule)],
  bootstrap: [AppComponent],
})
export class AppModule {}
