import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AddcartService } from 'src/app/Services/AddToCart/addcart.service';
import { ProductService } from 'src/app/Services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products:any[]=[];
  Search:any;

  constructor(
    private serviceProduct:ProductService,
    private AddcartService:AddcartService,
    private httpClient: HttpClient
  ){}

  ngOnInit(): void {
    this.AwidProduct();
  }
  
  AwidProduct(){
    this.serviceProduct.getAll().subscribe((res:any)=>{
      this.products=res
    })
  }
  // search(){
  //   if(this.category =="men's clothing"){
  //      this.products=this.products.filter((res)=>{
  //     return res.category
  //   })
  //   }
  // }
  Add(){
    this.serviceProduct.getAll().subscribe((test)=>{
      console.log(test);
    })
  }
  addToCart(id:Number):void{
    this.AddcartService.addToCart(id).subscribe(
      (res) =>{
        console.log(res);
      }
    )
  }
}
