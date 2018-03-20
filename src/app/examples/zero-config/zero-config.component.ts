import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zet-zero-config',
  template: `
    <div>Uses GridAnimate Sensible Defaults</div>
    <div class="grid" zetGridContainer>
      <div class="tile" zetGridTile *ngFor="let tile of tiles"></div>
    </div>
  `,
  styleUrls: ['./zero-config.component.scss'],
})
export class ZeroConfigComponent implements OnInit {
  tiles = new Array(9);

  constructor() {}

  ngOnInit() {}
}
