import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgNubisoftIconComponent } from './components/svg-nubisoft-icon/svg-nubisoft-icon.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SvgNubisoftIconComponent],
})
export class AppComponent {}
