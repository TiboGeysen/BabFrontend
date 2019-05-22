import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  public loadingError$ = new Subject<string>();

  constructor(private http: HttpClient) { }

  voegPostToe(post: Post) {
    return this.http.post(`${environment.apiUrl}/posts`, post.toJson());
  }

  uploadImage(fileToUpload: File): Observable<string> {

    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    return this.http.post(`${environment.apiUrl}/posts/images`, formData).pipe(
      map((value: any): string => value
      ));
  }

  get posts$(): Observable<Post[]> {
    return this.http.get(`${environment.apiUrl}/posts/`).pipe(

      catchError(err => {
        this.loadingError$.next(err.statusText);
        return of(null);
      }),
      map(
        (list: any[]): Post[] => list.map(Post.fromJson)
      )
    );
  }

  image$(link: string): Observable<File> {
    return this.http.get(`${environment.apiUrl}/posts/images/${link}`)
      .pipe(map((value: any): File => value));
  }
}
