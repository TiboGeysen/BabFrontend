import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../post.model';
import { AuthenticationService } from 'src/app/user/authentication.service';
import { PostService } from '../post.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {


  private categorieen: string[] = ["Bierfestival", "Evenementen", "Andere nieuwtjes"];
  public post: FormGroup;

  selectedFile: File = null;
  imageUrl: string = "/assets/images/defaultupload.svg";

  constructor(private _userService: AuthenticationService, private _postService: PostService) { }

  ngOnInit() {
    this.post = new FormGroup({
      titel: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(5)]),
      omschrijving: new FormControl('', [Validators.required, Validators.maxLength(250), Validators.minLength(10)]),
      categorie: new FormControl('', [Validators.required])
    })
  }

  onSubmit(Image) {
    let post = new Post(this.post.value.titel, this.post.value.omschrijving, new Date(), this._userService.user$.getValue(), this.post.value.categorie)
    this._postService.voegPostToe(post, this.selectedFile).subscribe();
    this.post.reset();
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];

    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.selectedFile);

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
