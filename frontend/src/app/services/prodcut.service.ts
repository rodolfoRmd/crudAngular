import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { catchError, EMPTY, map, Observable } from "rxjs";
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
    

  showMessage(msg: string, isError:boolean=false): void {
    this.snackBar.open(msg, "X", { 
      duration: 3000, 
      horizontalPosition: "right" ,
      verticalPosition:"top",
      panelClass: isError? ["msg-error"] : ["msg-success"]
      
    });
  }

 create(produto:Product):Observable<Product>{
  return this.httpClient.post<Product>(this.baseUrl,produto).pipe(
    map(obj=>obj),
    catchError(e=>this.errorHandler(e))
  );
 }
 
 read(): Observable<Product[]>{
  return this.httpClient.get<Product[]>(this.baseUrl).pipe(
    map(obj=>obj),
    catchError(e=>this.errorHandler(e))
  );
 }
 readById(id:number):Observable<Product>{
  return this.httpClient.get<Product>(`${this.baseUrl}/${id}`).pipe(
    map(obj=>obj),
    catchError(e=>this.errorHandler(e))
  );
 }
 update(product:Product):Observable<Product>{
  return this.httpClient.put<Product>(`${this.baseUrl}/${product.id}`,product).pipe(
    map(obj=>obj),
    catchError(e=>this.errorHandler(e))
  );
 }
 delete(id:number):Observable<Product>{
  return this.httpClient.delete<Product>(`${this.baseUrl}/${id}`).pipe(
    map(obj=>obj),
    catchError(e=>this.errorHandler(e))
  );
 }

 errorHandler(e:any):Observable<any>{
  console.log(e);
  this.showMessage('Ocorreu um erro no aplicativo',true);
  return EMPTY;
 }
}
