import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { pro, productsDTO } from '../../model/products.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private products: ProductsService) {}
  title: string = '';

  listProducts: productsDTO[] = [];

  ngOnInit(): void {
    this.title = 'Sản phẩm mới';
    this.Loading();
  }

  Loading() {
    this.products.getData().subscribe((item) => {
      this.listProducts = item;
      console.log(item);
    });
  }
}
