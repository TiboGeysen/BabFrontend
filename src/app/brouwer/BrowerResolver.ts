import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BrouwerdataService } from './brouwerdata.service';
import { Brouwer } from './brouwer.model';

@Injectable({
    providedIn: 'root'
})
export class BrowerResolver implements Resolve<Brouwer[]> {

    constructor(private brouwerService: BrouwerdataService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Brouwer[]> {
        return this.brouwerService.brouwers$;

    }


}