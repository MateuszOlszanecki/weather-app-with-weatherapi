import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'loading-card',
  templateUrl: './loading-card.component.html',
  imports: [NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingCardComponent {
  @Input() cityName: string;
}
