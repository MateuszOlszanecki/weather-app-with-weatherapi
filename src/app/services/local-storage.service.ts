import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  saveDarkModeToLocalStorage(darkMode: boolean): void {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }

  saveCitiesNamesListToLocalStorage(citiesNamesList: string[]): void {
    localStorage.setItem('citiesNamesList', JSON.stringify(citiesNamesList));
  }

  // When there is no citiesNamesList data in local storage then default value is set to
  // ['Gliwice', 'Hamburg'], because this should be default according to exercise.
  loadCitiesNamesListFromLocalStorage(): string[] {
    const storedCitiesNamesList = localStorage.getItem('citiesNamesList');
    return storedCitiesNamesList
      ? JSON.parse(storedCitiesNamesList)
      : ['Gliwice', 'Hamburg'];
  }

  // When there is no darkMode data in local storage then default value is set to true (darkMode).
  loadDarkModeFromLocalStorage(): boolean {
    const storedDarkMode = localStorage.getItem('darkMode');
    return storedDarkMode ? JSON.parse(storedDarkMode) : true;
  }
}
