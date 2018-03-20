import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zet-for-root',
  template: `
    <div>Uses GridAnimateModule.forRoot({{'{'}} timings: 400ms ease-in-out, containRatio: 1 {{'}'}})</div>

    <div class="grid" zetGridContainer>
      <div class="tile" zetGridTile *ngFor="let tile of tiles"></div>
    </div>
  `,
  styleUrls: ['./for-root.component.scss'],
})
export class ForRootComponent implements OnInit {
  tiles = new Array(9);

  constructor() {}

  ngOnInit() {}
}
