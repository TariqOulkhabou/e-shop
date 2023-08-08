import { HttpClient } from '@angular/common/http';
import { Injectable ,OnInit} from '@angular/core';
import { Config } from 'src/app/Config';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit{

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    
  }
  getAll(){
    return this.http.get(Config.Api);
  }
}
