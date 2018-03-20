import { Directive, OnInit, ElementRef, Input } from '@angular/core';

import { GridAnimationService } from './grid-animation.service';

@Directive({
  selector: '[zetGridContainer]',
  providers: [GridAnimationService],
})
export class GridContainerDirective {
  constructor(public el: ElementRef) {}

  @Input() containRatio: number;
  @Input() timings: string;
}
