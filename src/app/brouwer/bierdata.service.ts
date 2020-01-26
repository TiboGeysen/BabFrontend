import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bier } from './bier.model';
import { environment } from 'src/environments/environment';
import { Observable, Subject, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Brouwer } from './brouwer.model';

@Injectable({
  providedIn: 'root'
})
export class BierdataService {

  //injection van http
  constructor(private http: HttpClient) { }

  //succes message!
  //we vragen bieren op van onze C# db in JSON formaat (any) en zetten die via pipe & map om naar Bier[]
  get bieren$(): Observable<Bier[]> {
    return this.http.get(`${environment.apiUrl}/bieren/`).pipe(
      map(
        (list: any[]): Bier[] => list.map(Bier.fromJson)
      ),
    );
  }

  get mijnBieren$(): Observable<Bier[]> {
    return this.http.get(`${environment.apiUrl}/bieren/mijnbieren`).pipe(
      map(
        (list: any[]): Bier[] => list.map(Bier.fromJson)
      )
    );
  }

  editBier$(bier: Bier) {
    return this.http.put(`${environment.apiUrl}/bieren/${bier.id}/`, bier.toJson())
  }

  voegBierAanFavorietenToe$(bier: Bier) {
    return this.http.post(`${environment.apiUrl}/bieren/favorieten/`, bier.toJson())
  }

  verwijderUitFavorieten$(bier: Bier) {
    return this.http.delete(`${environment.apiUrl}/bieren/favorieten/${bier.id}`);
  }

  getRatings$(bieren: Bier[]): Observable<any> {
    const idQueryParam = bieren.map(bier => `id=${bier.id}`).join('&');
    return this.http.get(
      `${environment.apiUrl}/bieren/rated/?${idQueryParam}`
    );
  }

  rateBestBier(biernaam: String, brouwernaam: String) {
    return this.http.post(`${environment.apiUrl}/rating/${biernaam}/${brouwernaam}`, { bier: biernaam, brouwer: brouwernaam });

  }

  rateBier(bier: Bier, rating: number) {
    return this.http.put(`${environment.apiUrl}/bieren/rate/${bier.id}/${rating}`, { id: bier.toJson().id, rating: rating });
  }

  voegBierToe(bier: Bier) {
    return this.http.post(`${environment.apiUrl}/bieren/`, bier.toJson())
  }

  voegBierToeAdmin(bier: Bier, id: number) {
    return this.http.post(`${environment.apiUrl}/bieren/${id}/`, bier.toJson())
  }

  verwijderBier$(bier: Bier) {
    return this.http.delete(`${environment.apiUrl}/bieren/${bier.id}`);
  }
}
