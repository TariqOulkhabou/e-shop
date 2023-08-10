import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from 'src/app/Config';

@Injectable({
  providedIn: 'root'
})
export class AddcartService implements OnInit{

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
  }
  addToCart(id:Number):Observable<any>{
    return this.http.get<any>(`${Config.Api}/${id}`)
  }

}
