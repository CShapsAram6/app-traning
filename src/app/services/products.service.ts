import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productsDTO } from '../model/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getData(): Observable<productsDTO[]> {
    return this.http.get<productsDTO[]>(
      'https://localhost:7041/api/Product/get-all-item'
    );
  }
}
