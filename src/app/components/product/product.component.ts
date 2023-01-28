import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import{HttpClient} from '@angular/common/http'
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  
  products:Product[] = [];
  dataLoaded = false;
  
  constructor(private productService:ProductService, 
    private activatedRoute:ActivatedRoute){}

  ngOnInit():void{
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
      }else{
        this.getProducts()
      }
    })
  }
  getProducts(){
    this.productService.getProducts().subscribe(response=>{
    console.log("responseg",response);
    this.products = response.data;
    this.dataLoaded = true;
  })
  }
  getProductsByCategory(categoryId:number){
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
    console.log("response",response);
    this.products = response.data;
    this.dataLoaded = true;
  })
  }
}
