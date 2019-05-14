import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../post.model';
import { AuthenticationService } from 'src/app/user/authentication.service';
import { PostService } from '../post.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  public post: FormGroup;

  constructor(private _userService: AuthenticationService, private _postService: PostService) { }

  ngOnInit() {
    this.post = new FormGroup({
      fotolink: new FormControl(''),
      titel: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(5)]),
      omschrijving: new FormControl('', [Validators.required, Validators.maxLength(250), Validators.minLength(10)])
    })
  }

  onSubmit() {
    let post = new Post(this.post.value.titel, this.post.value.omschrijving, this.post.value.fotolink, new Date(), this._userService.user$.getValue())
    this._postService.voegPostToe(post).subscribe();
    this.post.reset();
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'Veld is verplicht in te vullen';
    } else if (errors.minlength) {
      return `Te kort, minimaal ${errors.minlength.requiredLength} karakaters, u heeft er ${errors.minlength.actualLength}`;
    }
    else if (errors.maxlength) {
      return `Te lang, maximaal ${errors.maxlength.requiredLength} karakaters, u heeft er ${errors.maxlength.actualLength}`;
    }
  }
}
