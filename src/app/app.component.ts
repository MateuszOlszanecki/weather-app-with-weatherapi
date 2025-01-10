import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SvgNubisoftIconComponent } from './components/svg-nubisoft-icon/svg-nubisoft-icon.component';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SvgNubisoftIconComponent, CardComponent],
})
export class AppComponent implements OnInit {
  citiesNames: string[] = ['Gliwice', 'Hamburg'];
  darkMode: boolean;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.darkMode = this.localStorageService.loadDarkModeFromLocalStorage();
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    this.localStorageService.saveDarkModeToLocalStorage(this.darkMode);
  }
}
