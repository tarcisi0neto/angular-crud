import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3001/products';

  constructor( 
    private snacbar: MatSnackBar,
    private http: HttpClient,  
  ) { }

  showMessage(msg : string): void {
    this.snacbar.open(msg, 'x', {
      duration: 2000,
      horizontalPosition:'center',
      verticalPosition:'top'
    })
  }

  create(product : Product) : Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product)
  }

  read() : Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }
}
