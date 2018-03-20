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
import { DEFAULT_CONTAIN_RATIO, DEFAULT_TIMINGS } from './tokens';

@Directive({
  selector: '[zetGridTile]',
})
export class GridTileDirective implements OnInit {
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
    @Inject(DEFAULT_TIMINGS) private defaultTimings: string,
    @Inject(DEFAULT_CONTAIN_RATIO) private defaultContainRatio: number,
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
