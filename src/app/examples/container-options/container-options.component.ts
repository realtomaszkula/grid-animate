import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zet-container-options',
  template: `
    <div>Uses zetGridContainer timings="800ms ease-in" [containRatio]="2/3"</div>

    <div class="grid" zetGridContainer timings='800ms ease-in' [containRatio]="2/3">
      <div class="tile" zetGridTile *ngFor="let tile of tiles"></div>
    </div>
  `,
  styleUrls: ['./container-options.component.scss'],
})
export class ContainerOptionsComponent implements OnInit {
  tiles = new Array(9);

  constructor() {}

  ngOnInit() {}
}
