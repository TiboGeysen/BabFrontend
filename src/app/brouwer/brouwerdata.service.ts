import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  getBrouwer$(id: number): Observable<Brouwer> {
    return this.http.get(`${environment.apiUrl}/brouwers/${id}`, { responseType: "json" }).pipe(
      map(
        (list: any): Brouwer => list
      )
    );
  }

  editBrouwer$(brouwer: Brouwer) {
    return this.http.put(`${environment.apiUrl}/brouwers/${brouwer.id}/`, brouwer.toJson())
  }

  getBrouwers$(name?: string, percentage?: string, bier?: string, kleur?: string, smaak?: string) {
    let params = new HttpParams();
    params = percentage ? params.append('percentage', percentage) : params;
    params = name ? params.append('naamBrouwer', name) : params;
    params = bier ? params.append('bierNaam', bier) : params;
    params = kleur ? params.append('kleur', kleur) : params;
    params = smaak ? params.append('smaak', smaak) : params;
    return this.http.get(`${environment.apiUrl}/brouwers/filter`, { params }).pipe(

      map((list: any[]): Brouwer[] => list.map(Brouwer.fromJson))
    );
  }


  verwijderBrouwer$(brouwer: Brouwer) {
    return this.http.delete(`${environment.apiUrl}/brouwers/${brouwer.id}`);
  }

  get brouwer$(): Observable<Brouwer> {
    return this.http.get(`${environment.apiUrl}/brouwers/brouwer`, { responseType: "json" }).pipe(
      map(
        (list: any): Brouwer => list
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
