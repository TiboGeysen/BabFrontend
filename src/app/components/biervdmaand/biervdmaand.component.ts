import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/user/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-biervdmaand',
  templateUrl: './biervdmaand.component.html',
  styleUrls: ['./biervdmaand.component.css']
})
export class BiervdmaandComponent implements OnInit {


  constructor(private _service: AuthenticationService) { }

  ngOnInit() {
  }


}
