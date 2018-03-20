import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'zet-root',
  template: `
  <nav>
    <div routerLink="/zero-config">Zero config</div>
  </nav>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
  animations: [],
})
export class AppComponent {
  constructor() {}
}
