import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onTerm(term: string) {
    console.log(`I'm the app and I submitted this - ${term}`);
  }
}
