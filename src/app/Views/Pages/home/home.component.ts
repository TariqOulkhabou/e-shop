import { Component ,OnInit} from '@angular/core';
import { ProductService } from 'src/app/Services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  myData :any = [];
  constructor(private service:ProductService){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getProduct();
  }
  
  getProduct(){
    this.service.getAll().subscribe((data)=>{
      this.myData = data
      console.log(this.myData);
    })
  }

}
   