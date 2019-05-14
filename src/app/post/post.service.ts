import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  voegPostToe(post: Post) {
    return this.http.post(`${environment.apiUrl}/posts`, post.toJson())
  }
}
