import { Injectable } from '@angular/core';
import {
  animate,
  style,
  trigger,
  transition,
  state,
  AnimationBuilder,
} from '@angular/animations';

interface AnimateDeltas {
  deltaX: number;
  deltaY: number;
  deltaW: number;
  deltaH: number;
}

interface GridElements {
  containerEl: HTMLElement;
  tileEl: HTMLElement;
}

interface GetDeltaParams {
  containRatio: number;
  containerEl: HTMLElement;
  tileEl: HTMLElement;
}

interface AnimateParams {
  elements: GridElements;
  containRatio: number;
  timings: string;
}

@Injectable()
export class GridAnimationService {
  constructor(private builder: AnimationBuilder) {}

  animate({ elements, timings, containRatio }: AnimateParams) {
    const { containerEl, tileEl } = elements;
    const { deltaX, deltaY, deltaW, deltaH } = this.getDeltas({
      containerEl,
      tileEl,
      containRatio,
    });
    const translate = this.translate(deltaX, deltaY);
    const scale = this.scale(deltaW, deltaH);

    const factory = this.builder.build([
      animate(
        timings,
        style({
          transformOrigin: 'top left',
          transform: `${translate} ${scale}`,
        }),
      ),
    ]);

    const animation = factory.create(tileEl);

    animation.play();
  }

  private getDeltas({ tileEl, containerEl, containRatio }): AnimateDeltas {
    const first = tileEl.getBoundingClientRect();
    const last = containerEl.getBoundingClientRect();

    const deltaX = last.left - first.left;
    const deltaY = last.top - first.top;
    const deltaW = last.width / first.width;
    const deltaH = last.height / first.height * containRatio;

    return { deltaX, deltaY, deltaW, deltaH };
  }

  private translate = (x: number, y: number) =>
    `translate(${x.toFixed(0)}px, ${y.toFixed(0)}px)`;

  private scale = (x: number, y: number) =>
    `scale(${x.toFixed(2)}, ${y.toFixed(2)})`;
}
