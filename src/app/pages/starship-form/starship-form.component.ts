import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StarshipModel } from 'src/app/models/starship.model';
import { ApiService } from 'src/app/services/api.service';
import { StarshipsService } from 'src/app/services/starships.service';

@Component({
  selector: 'app-starship-form',
  templateUrl: './starship-form.component.html',
  styleUrls: ['./starship-form.component.scss']
})
export class StarshipFormComponent implements OnInit, OnChanges {

  @Input() idStarship: string = '';

  starshipForm: FormGroup;

  constructor(private apiService: ApiService, private formBuilder: FormBuilder, private starshipsService: StarshipsService) {
    this.starshipForm = this.initializeForm();
   }

  ngOnInit(): void {
  }

  ngOnChanges(){
    if(this.idStarship !== ''){
      this.validatestorage();
    }
  }

  validatestorage(){
    const storageData = localStorage.getItem('starshipsData');
    const regEx = /[^0-9]+/g;
    if(storageData){
      const starshipToEdit = JSON.parse(storageData).find((el: StarshipModel)=> el.url.replace(regEx, "") === this.idStarship);
      if(starshipToEdit !== undefined){
        this.starshipForm.setValue({
          ...starshipToEdit
        });
        this.starshipsService.saveToStorage();
      } else {
        this.getDataStarship(this.idStarship);
      }
    }
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
      url: ['', Validators.required],
    });
  }

  getDataStarship(id: string){
    this.apiService.getStarship(id).subscribe(data => {
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
        url: data.url
      });
    }, err => {
      console.log(err);
    })
  }

  sendInfo(){
    const storageData = localStorage.getItem('starshipsData');
    const regEx = /[^0-9]+/g;
    if(storageData){
      const starshipToEdit = JSON.parse(storageData).find((el: StarshipModel)=> el.url.replace(regEx, "") === this.idStarship);
      if(starshipToEdit !== undefined){
        this.starshipsService.editStarship(this.starshipForm.value);
      } else {
        this.starshipsService.addStarship(this.starshipForm.value);
      }
    }
    
  }

  validateInput(name: string){
    return this.starshipForm.get(name)?.invalid && this.starshipForm.get(name)?.touched
  }

  deleteStarship(){
    this.starshipsService.deleteStarship(this.starshipForm.value);
  }

}
