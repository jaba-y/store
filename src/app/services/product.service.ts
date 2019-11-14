import { Injectable } from '@angular/core';
import { Products } from 'src/app/model/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('http://localhost:3000/product');
  }
  addProducts(formData) {
    return this.http.post('http://localhost:3000/product', formData);
  }
  filterProducts(id) {
    return this.http.get('http://localhost:3000/product/' + id);
  }
  updateProducts(formData, id) {
    return this.http.put('http://localhost:3000/product/' + id, formData);
  }
  deleteProducts(id) {
    return this.http.get('http://localhost:3000/product/' + id);
  }
}
