import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { Product } from "../models/product";

@Injectable({
  providedIn: "root",
})
export class ProdcutService {
  baseUrl:string = 'http://localhost:3001/products';
  constructor(
    private snackBar: MatSnackBar, 
    private httpClient: HttpClient
    ) {}
    

  showMessage(msg: string): void {
    this.snackBar.open(msg, "X", { 
      duration: 3000, 
      horizontalPosition: "right" ,
      verticalPosition:"top"
    });
  }

 create(produto:Product):Observable<Product>{
  return this.httpClient.post<Product>(this.baseUrl,produto);
 }
 
 read(): Observable<Product[]>{
  return this.httpClient.get<Product[]>(this.baseUrl);
 }
}
