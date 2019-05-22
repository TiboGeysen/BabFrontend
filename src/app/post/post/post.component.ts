import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() public post: Post;
  @Input() public image: File;
  imageUrl: string = "/assets/images/defaultupload.svg";



  constructor() { }

  ngOnInit() {
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.image);
    console.log(this.imageUrl);
  }
}

