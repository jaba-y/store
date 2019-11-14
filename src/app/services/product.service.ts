import { Injectable } from '@angular/core';
import { Products } from 'src/app/model/product';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  actionUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }
  getProducts() {
    return this.http.get(this.actionUrl + '/product');
  }
  addProducts(formData) {
    return this.http.post(this.actionUrl + '/product', formData);
  }
  filterProducts(id) {
    return this.http.get(this.actionUrl + '/product/' + id);
  }
  updateProducts(formData, id) {
    return this.http.put(this.actionUrl + '/product/' + id, formData);
  }
  deleteProducts(id) {
    return this.http.delete(this.actionUrl + '/product/' + id);
  }
}
