import { Injectable } from '@angular/core';
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
    if(storageData)
    this.starshipsData = JSON.parse(storageData);
  }

  editStarship(){

  }

  deleteStarship(starships: StarshipModel){
    this.starshipsData = this.starshipsData.filter( starship => starship.url !== starships.url);
    this.saveToStorage();
  }
  
}
