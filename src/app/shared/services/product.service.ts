import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IProduct } from '../models/product.model';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productUrl = 'api/products/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  // Obtén un producto
  // Como estamos trabajando con un archivo json, solo podemos recuperar todos los productos
  // Así que recupera todos los productos y luego encuentra el que queremos usando 'map'
  getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts().pipe(
      map((products: IProduct[]) => products.find((p) => p.productId === id))
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // en una aplicación del mundo real, podemos enviar el servidor a alguna infraestructura de registro remoto
    // en lugar de simplemente iniciar sesión en la consola
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // Se produjo un error de red o del lado del cliente. Manéjelo en consecuencia.

      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // El backend devolvió un código de respuesta incorrecto.
      // El cuerpo de la respuesta puede contener pistas sobre lo que salió mal,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
