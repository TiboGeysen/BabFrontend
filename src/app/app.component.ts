import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'HoGentWebApp';

  constructor(private router: Router) {

  }

  ngOnInit() {

  }
  isValid(): boolean {
    if (this.router.url != "/") {
      return true;
    }
    else {
      return false;
    }
  }
}
