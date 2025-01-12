import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CitiesListService {
  private citiesNamesList$ = new BehaviorSubject<string[]>([]);

  constructor(private localStorageService: LocalStorageService) {}

  getCitiesNamesList(): Observable<string[]> {
    return this.citiesNamesList$.asObservable();
  }

  setCitiesNamesList(citiesNamesList: string[]): void {
    this.citiesNamesList$.next(citiesNamesList);
  }

  addCity(cityName: string): void {
    const currentList = this.citiesNamesList$.getValue();
    const newList = [...currentList, cityName];
    this.localStorageService.saveCitiesNamesListToLocalStorage(newList);
    this.citiesNamesList$.next(newList);
  }

  deleteCity(index: number): void {
    const currentList = this.citiesNamesList$.getValue();
    currentList.splice(index, 1);
    this.localStorageService.saveCitiesNamesListToLocalStorage(currentList);
    this.citiesNamesList$.next(currentList);
  }
}
