import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ApiService } from '../../services/api.service';
import { BehaviorSubject, catchError, EMPTY, Observable } from 'rxjs';
import { Weather } from '../../models/weather.model';
import WEATHER_API_KEY from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { ErrorCardComponent } from '../error-card/error-card.component';
import { LoadingCardComponent } from '../loading-card/loading-card.component';
import { UpscaleImagePipe } from '../../pipes/upscale-image.pipe';
import { CitiesListService } from '../../services/cities-list.service';

@Component({
  selector: 'card',
  imports: [
    CommonModule,
    ErrorCardComponent,
    LoadingCardComponent,
    UpscaleImagePipe,
  ],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() cityName: string;
  @Input() index: number;

  numberOfDays: number = 3;

  weather$: Observable<Weather>;
  errorMessage$: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);

  constructor(
    private apiService: ApiService,
    private citiesListService: CitiesListService
  ) {}

  ngOnInit(): void {
    this.weather$ = this.apiService
      .getWeather(WEATHER_API_KEY, this.cityName, this.numberOfDays)
      .pipe(
        catchError((error) => {
          this.errorMessage$.next(error.message);
          return EMPTY;
        })
      );
  }

  onDelete() {
    this.citiesListService.deleteCity(this.index);
  }
}
