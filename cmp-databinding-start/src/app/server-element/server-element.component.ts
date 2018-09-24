import { Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {

  @Input() element: {type: string, name: string, content: string};

  constructor() { 
    console.log('constructor called')
  }

  ngOnInit() {
    console.log('ngOnInit called');
    
  }

  ngOnChanges(changes: simpleChanges) {
    console.log('ngOnChanges called')
    console.log(changes);
    
  }

}
