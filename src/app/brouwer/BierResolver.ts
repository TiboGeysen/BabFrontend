import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Bier } from './bier.model';
import { Observable } from 'rxjs';
import { BierdataService } from './bierdata.service';

@Injectable({
    providedIn: 'root'
})
export class BierResolver implements Resolve<Bier[]> {

    constructor(private bierService: BierdataService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bier[]> {
        return this.bierService.bieren$;

    }


}