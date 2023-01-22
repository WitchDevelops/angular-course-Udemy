import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {
      title: 'Why are Angular learning materials so few and far between?'
  };

  onClick() {
    alert("Because it can.");
  }

  onKeyUp(newTitle:string) {
this.data.title = newTitle;
  }
}
