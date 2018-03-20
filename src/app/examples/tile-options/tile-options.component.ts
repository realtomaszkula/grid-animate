import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zet-tile-options',
  template: `

    <div class="grid" zetGridContainer >
      <div class="tile" zetGridTile *ngFor="let tile of tiles; let i = index" [timings]="100 * (i+1) + 'ms ease-in'" [containRatio]="1">
        {{ 100 * (i + 1) + 'ms ease-in'}}
      </div>
    </div>
  `,
  styleUrls: ['./tile-options.component.scss'],
})
export class TileOptionsComponent implements OnInit {
  tiles = new Array(9);

  constructor() {}

  ngOnInit() {}
}
