import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<div class="col-xs-8 col-xs-offset-2">
    <h2>{{money | currency:'USD' }}</h2>
    <h2>{{money | currency:'USD' }}</h2>
    <h2>{{money | currency:'USD' }}</h2>
    <hr>
    <h2>{{date }}</h2>
    <h2>{{date | date: 'full' }}</h2>
    <h2>{{date | date: 'short' }}</h2>
    <h2>{{date | date: 'fullDate' }}</h2>
    <h2>{{date | date: 'shortDate' }}</h2>
    <hr>
    <h2>{{amount}}</h2>
    <h2>{{amount | percent }}</h2>
    <hr>
    <h2>{{object }}</h2>
    <h2><pre>{{object | json }}</pre></h2>
  </div>
`

  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App! Release v1.0';
  pi = Math.PI;
  money = 7799;
  date = new Date();
  amount = 0.45;
  object = {
    foo: 'bar',
    baz: 'qux',
    nested: {
      xyz: 3,
      numbers: [1, 2, 3]
    }
  };
}
