import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Input,
  Inject,
  Optional,
} from '@angular/core';

import { GridAnimationService } from './grid-animation.service';
import { GridContainerDirective } from './grid-container.directive';
import { GRID_ANIMATE_TIMINGS, GRID_CONTAIN_RATIO } from './public_api';

@Directive({
  selector: '[zetGridTile]',
})
export class GridTileDirective implements OnInit {
  readonly defaultTimings = '200ms ease-in';
  readonly defaultContainRatio = 0.5;

  @Input() timings: string;
  @Input() containRatio: number;

  constructor(
    public el: ElementRef,
    public container: GridContainerDirective,
    private gridAnimation: GridAnimationService,
    @Optional()
    @Inject(GRID_ANIMATE_TIMINGS)
    private globalTimings: string,
    @Optional()
    @Inject(GRID_CONTAIN_RATIO)
    private globalContainRatio: number,
  ) {}

  ngOnInit() {}

  @HostListener('click')
  onClick() {
    const timings =
      this.timings ||
      this.container.timings ||
      this.globalTimings ||
      this.defaultTimings;

    const containRatio =
      this.containRatio ||
      this.container.containRatio ||
      this.globalContainRatio ||
      this.defaultContainRatio;

    this.gridAnimation.animate({
      elements: {
        containerEl: this.container.el.nativeElement,
        tileEl: this.el.nativeElement,
      },
      containRatio,
      timings,
    });
  }
}
