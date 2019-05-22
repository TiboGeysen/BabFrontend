import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from './post.model';
import { PostService } from './post.service';

@Injectable({
    providedIn: 'root'
})
export class PostResolver implements Resolve<Post[]> {

    constructor(private postService: PostService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> {
        return this.postService.posts$;

    }


}