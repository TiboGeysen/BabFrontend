import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Bier } from '../brouwer/bier.model';
import { Observable } from 'rxjs';
import { BierdataService } from '../brouwer/bierdata.service';

@Injectable({
    providedIn: 'root'
})
export class MijnBierResolver implements Resolve<Bier[]> {

    constructor(private bierService: BierdataService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bier[]> {
        return this.bierService.mijnBieren$;

    }


}