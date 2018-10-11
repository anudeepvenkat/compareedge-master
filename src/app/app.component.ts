import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Payroll-Comparison-App';
  clientID : String = '';
  ngOnInit() {
    //this.clientID = 'Siva';
  }

  receiveMessage($event) {
    this.clientID = $event
  }
}
