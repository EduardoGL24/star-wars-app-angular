import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-starship-form',
  templateUrl: './starship-form.component.html',
  styleUrls: ['./starship-form.component.scss']
})
export class StarshipFormComponent implements OnInit, OnChanges {

  @Input() idStarship: string = '';

  name: string = '';
  starshipModel: string = '';
  passengers: string = '';
  starshipClass: string = '';
  maxAtmospheringSpeed: string = '';
  manufacturer: string = '';
  hyperdriveRating: string = '';
  crew: string = '';
  starshipLength: string = '';
  costIncredits: string = '';
  consumables: string = '';
  cargoCapacity: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.idStarship !== '' ? this.getDataStarship(this.idStarship) : '';
  }

  getDataStarship(id: string){
    this.apiService.getStarship(id).subscribe(data => {
      console.log(data);
      this.name = data.name;
      this.starshipModel = data.model;
      this.passengers = data.passengers;
      this.starshipClass = data.starship_class;
      this.maxAtmospheringSpeed = data.max_atmosphering_speed;
      this.manufacturer = data.manufacturer;
      this.hyperdriveRating = data.hyperdrive_rating;
      this.crew = data.crew;
      this.starshipLength = data.length;
      this.costIncredits = data.cost_in_credits;
      this.consumables = data.consumables;
      this.cargoCapacity = data.cargo_capacity;
    }, err => {
      console.log(err);
    })
  }

}
