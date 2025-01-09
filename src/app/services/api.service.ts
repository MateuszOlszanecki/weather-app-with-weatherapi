import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { CurrentWeather } from '../models/current-weather.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // This function handles errors in 3 different ways to ensure the correct error message is returned.
  private handleError(error: any): Observable<never> {
    const apiErrorResponse = error?.error?.error?.message;
    const httpErrorResponse = error?.error?.message;
    if (apiErrorResponse) {
      return throwError(() => apiErrorResponse);
    }
    if (httpErrorResponse) {
      return throwError(() => httpErrorResponse);
    }
    return throwError(() => 'Unidentified error occurred.');
  }

  // This function constructs the API url to fetch current weather data for given city.
  getCurrentWeather(
    apiKey: string,
    cityName: string,
    protocol: 'http' | 'https' = 'https'
  ): Observable<CurrentWeather> {
    const apiUrl = `${protocol}://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`;
    return this.http
      .get<CurrentWeather>(apiUrl)
      .pipe(catchError((error) => this.handleError(error)));
  }
}
