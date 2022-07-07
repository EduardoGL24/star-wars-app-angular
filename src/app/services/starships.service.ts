import { Injectable } from '@angular/core';
import { Starship } from '../interfaces/starships-response';
import { StarshipModel } from '../models/starship.model';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  public starshipsData: StarshipModel[] = []

  constructor() { 
    this.getStorage();
  }

  addStarship(starship: StarshipModel){
    const editStartship = new StarshipModel(starship);
    this.starshipsData.push(editStartship);
    this.saveToStorage();
  }

  saveToStorage(){
    localStorage.setItem('starshipsData', JSON.stringify(this.starshipsData));
  }

  getStorage(){
    const storageData = localStorage.getItem('starshipsData');
    if(storageData){
      return this.starshipsData = JSON.parse(storageData);
    }
  }

  editStarship(starshipEdit: StarshipModel){
    this.starshipsData.forEach((el, i) => {
      if(el.url === starshipEdit.url){
        this.starshipsData[i] = starshipEdit;
        this.saveToStorage();
      }
    })
  }

  deleteStarship(starships: StarshipModel){
    this.starshipsData = this.starshipsData.filter( starship => starship.url !== starships.url);
    this.saveToStorage();
  }
  
}
