import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { Brouwer } from './brouwer.model';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BrouwerdataService {

  public loadingError$ = new Subject<string>();

  constructor(private http: HttpClient) { }


  get brouwers$(): Observable<Brouwer[]> {
    return this.http.get(`${environment.apiUrl}/brouwers`).pipe(
      catchError(err => {
        this.loadingError$.next(err.statusText);
        return of(null);
      }),

      map(
        (list: any[]): Brouwer[] => list.map(Brouwer.fromJson)
      )
    );
  }
}
