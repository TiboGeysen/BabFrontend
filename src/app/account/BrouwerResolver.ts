import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Brouwer } from '../brouwer/brouwer.model';
import { Observable } from 'rxjs';
import { BrouwerdataService } from '../brouwer/brouwerdata.service';

@Injectable({
    providedIn: 'root'
})
export class BrouwerResolver implements Resolve<Brouwer> {

    constructor(private service: BrouwerdataService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Brouwer> {
        return this.service.brouwer$;
    }


}