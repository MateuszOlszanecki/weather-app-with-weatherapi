import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from './services/local-storage.service';
import { AddCardComponent } from './components/add-card/add-card.component';
import { Observable } from 'rxjs';
import { CitiesListService } from './services/cities-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CardComponent, AddCardComponent],
})
export class AppComponent implements OnInit {
  citiesNamesList$: Observable<string[]>;
  darkMode: boolean;

  constructor(
    private localStorageService: LocalStorageService,
    private citiesListService: CitiesListService
  ) {}

  ngOnInit(): void {
    this.citiesNamesList$ = this.citiesListService.getCitiesNamesList();
    this.darkMode = this.localStorageService.loadDarkModeFromLocalStorage();
    this.citiesListService.setCitiesNamesList(
      this.localStorageService.loadCitiesNamesListFromLocalStorage()
    );
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    this.localStorageService.saveDarkModeToLocalStorage(this.darkMode);
  }
}
