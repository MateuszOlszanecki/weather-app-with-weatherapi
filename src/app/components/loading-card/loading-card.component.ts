import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'loading-card',
  templateUrl: './loading-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingCardComponent {}
