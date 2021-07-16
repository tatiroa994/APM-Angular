import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      const id = Number(route.paramMap.get('id'));
      if (isNaN(id) || id < 1) {
        alert('Invalid product id');
        this.router.navigate(['/products']);
        //retorna  false para q el enrrutador no cancele la activacion de la ruta de product-detail
        return false;
      }

      // retorna true y  continua  con la pagina de  product-detail
    return true;

  // agregar en el  obj  de las  rutas 
  }
}
