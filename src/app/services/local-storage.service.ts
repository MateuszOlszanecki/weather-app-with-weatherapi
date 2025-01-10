import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  saveDarkModeToLocalStorage(darkMode: boolean): void {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }

  // When there is no darkMode data in local storage then default value is set to true (darkMode).
  loadDarkModeFromLocalStorage(): boolean {
    const storedDarkMode = localStorage.getItem('darkMode');
    return storedDarkMode ? JSON.parse(storedDarkMode) : true;
  }
}
