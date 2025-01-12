import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ApiService } from '../../services/api.service';
import { BehaviorSubject, catchError, EMPTY, Observable } from 'rxjs';
import { CurrentWeather } from '../../models/current-weather.model';
import WEATHER_API_KEY from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { ErrorCardComponent } from '../error-card/error-card.component';
import { LoadingCardComponent } from '../loading-card/loading-card.component';

@Component({
  selector: 'card',
  imports: [CommonModule, ErrorCardComponent, LoadingCardComponent],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() cityName: string;

  weather$: Observable<CurrentWeather>;
  errorMessage$: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.weather$ = this.apiService
      .getCurrentWeather(WEATHER_API_KEY, this.cityName)
      .pipe(
        catchError((error) => {
          this.errorMessage$.next(error.message);
          return EMPTY;
        })
      );
  }
}
