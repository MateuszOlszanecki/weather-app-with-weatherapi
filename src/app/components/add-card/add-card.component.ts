import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CitiesListService } from '../../services/cities-list.service';

@Component({
  selector: 'add-card',
  imports: [ReactiveFormsModule],
  templateUrl: './add-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCardComponent implements OnInit {
  newCityForm: FormGroup;

  constructor(private citiesListService: CitiesListService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.newCityForm = new FormGroup({
      cityName: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    const cityName = this.newCityForm.value.cityName.trim();
    if (cityName) this.citiesListService.addCity(cityName);
    this.initForm();
  }
}
