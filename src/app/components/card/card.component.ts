import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ApiService } from '../../services/api.service';
import { catchError, EMPTY, Observable } from 'rxjs';
import { CurrentWeather } from '../../models/current-weather.model';
import WEATHER_API_KEY from '../../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() cityName: string;
  weather$: Observable<CurrentWeather>;
  errorMessage: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.weather$ = this.apiService
      .getCurrentWeather(WEATHER_API_KEY, this.cityName)
      .pipe(
        catchError((error) => {
          this.errorMessage = error;
          return EMPTY;
        })
      );
  }
}
