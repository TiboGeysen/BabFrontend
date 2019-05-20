import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

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
}
