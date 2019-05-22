import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-postlijst',
  templateUrl: './postlijst.component.html',
  styleUrls: ['./postlijst.component.css']
})
export class PostlijstComponent implements OnInit {

  private _fetchPosts: Post[];

  constructor(private route: ActivatedRoute, private _service: PostService) {

  }
  ngOnInit() {
    this.route.data.subscribe(items => this._fetchPosts = items['posts']);
  }

  get posts$() {
    return this._fetchPosts;
  }

  /*   image$(link: string) {
      return this._service.image$(link);
    } */

}
