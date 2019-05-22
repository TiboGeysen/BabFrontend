import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Brouwer } from './brouwer.model';

@Injectable({
  providedIn: 'root'
})
export class BrouwerdataService {

  //injection van http
  constructor(private http: HttpClient) { }

  get mijnBrouwers$(): Observable<Brouwer[]> {
    return this.http.get(`${environment.apiUrl}/brouwers/mijnbrouwers`).pipe(
      map(
        (list: any[]): Brouwer[] => list.map(Brouwer.fromJson)
      )

    );
  }

  //we vragen bieren op van onze C# db in JSON formaat (any) en zetten die via pipe & map om naar Bier[]
  get brouwers$(): Observable<Brouwer[]> {
    return this.http.get(`${environment.apiUrl}/brouwers`).pipe(
      map(
        (list: any[]): Brouwer[] => list.map(Brouwer.fromJson)
      )
    );
  }
}
