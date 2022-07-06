import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-starship-form',
  templateUrl: './starship-form.component.html',
  styleUrls: ['./starship-form.component.scss']
})
export class StarshipFormComponent implements OnInit, OnChanges {

  @Input() idStarship: string = '';

  starshipForm: FormGroup;

  constructor(private apiService: ApiService, private formBuilder: FormBuilder) {
    this.starshipForm = this.initializeForm();
   }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.idStarship !== '' ? this.getDataStarship(this.idStarship) : '';
  }

  initializeForm(){
    return this.formBuilder.group({
      name: ['', Validators.required],
      starshipModel: ['', Validators.required],
      passengers: ['', Validators.pattern('[0-9]*(\.?)[0-9]')],
      starshipClass: [''],
      maxAtmospheringSpeed: ['', Validators.pattern('[0-9]*(\.?)[0-9]')],
      manufacturer: ['', [Validators.maxLength(100)]],
      hyperdriveRating: ['', Validators.pattern('[0-9]*(\.?)[0-9]')],
      crew: ['', Validators.pattern('[0-9]*(\.?)[0-9]')],
      starshipLength: ['', Validators.pattern('[0-9]*(\.?)[0-9]')],
      costIncredits: ['', Validators.pattern('[0-9]*(\.?)[0-9]')],
      consumables: [''],
      cargoCapacity: ['', Validators.pattern('[0-9]*(\.?)[0-9]')],
    });
  }

  getDataStarship(id: string){
    this.apiService.getStarship(id).subscribe(data => {
      console.log(data);
      this.starshipForm.setValue({
        name: data.name,
        starshipModel: data.model,
        passengers: Number(data.passengers),
        starshipClass: data.starship_class,
        maxAtmospheringSpeed: Number(data.max_atmosphering_speed),
        manufacturer: data.manufacturer,
        hyperdriveRating: Number(data.hyperdrive_rating),
        crew: Number(data.crew),
        starshipLength: Number(data.length),
        costIncredits: Number(data.cost_in_credits),
        consumables: data.consumables,
        cargoCapacity: Number(data.cargo_capacity),
      });

    }, err => {
      console.log(err);
    })
  }

  sendInfo(){
    console.log(this.starshipForm);
  }

}
