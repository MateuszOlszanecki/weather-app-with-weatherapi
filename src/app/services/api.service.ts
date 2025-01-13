import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Weather } from '../models/weather.model';
import { ApiError } from '../models/api-error.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // This function handles errors in 3 different ways to ensure the correct error message is returned.
  private handleError(error: ApiError): Observable<never> {
    const apiErrorResponse = error.error?.error?.message;
    const httpErrorResponse = error.error?.message;
    if (apiErrorResponse) {
      return throwError(() => new Error(apiErrorResponse));
    }
    if (httpErrorResponse) {
      return throwError(() => new Error(httpErrorResponse));
    }
    return throwError(() => new Error('An unexpected error occurred.'));
  }

  // This function constructs the API url to fetch current weather data for given city.
  getWeather(
    apiKey: string,
    cityName: string,
    numberOfDays: number,
    protocol: 'http' | 'https' = 'https'
  ): Observable<Weather> {
    const apiUrl = `${protocol}://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=${numberOfDays}&aqi=no&alerts=no`;
    return this.http
      .get<Weather>(apiUrl)
      .pipe(catchError((error) => this.handleError(error)));
  }
}
