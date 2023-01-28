import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl='https://localhost:44388/api/';

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/GetAll"
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/GetAllByCategoryId?categoryId="+categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
}
