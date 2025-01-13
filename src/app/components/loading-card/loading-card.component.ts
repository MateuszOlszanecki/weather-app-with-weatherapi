import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'loading-card',
  templateUrl: './loading-card.component.html',
  imports: [NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingCardComponent {}
