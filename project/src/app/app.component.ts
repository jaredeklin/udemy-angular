import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Recipe Book';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCpf3oSsn9jWj-z-YRa7qwuQUVI8Ch0G1I',
      authDomain: 'recipe-book-9dde2.firebaseapp.com',
    });
  }
}
