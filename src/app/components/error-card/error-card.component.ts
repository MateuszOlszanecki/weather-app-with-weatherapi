import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'error-card',
  templateUrl: './error-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorCardComponent {
  @Input() errorMessage: string;
}
