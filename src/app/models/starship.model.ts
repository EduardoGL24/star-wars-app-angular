export class StarshipModel {
  name:                   string;
  starshipModel:          string;
  manufacturer:           string;
  costIncredits:          number;
  starshipLength:         number;
  maxAtmospheringSpeed:   number;
  crew:                   number;
  passengers:             number;
  cargoCapacity:          number;
  consumables:            string;
  hyperdriveRating:       number;
  starshipClass:          string;
  url:                    string;

  constructor(starship: StarshipModel){
    this.name                   = starship.name;
    this.starshipModel          = starship.starshipModel;
    this.manufacturer           = starship.manufacturer;
    this.costIncredits          = starship.costIncredits;
    this.starshipLength         = starship.starshipLength;
    this.maxAtmospheringSpeed   = starship.maxAtmospheringSpeed;
    this.crew                   = starship.crew;
    this.passengers             = starship.passengers;
    this.cargoCapacity          = starship.cargoCapacity;
    this.consumables            = starship.consumables;
    this.hyperdriveRating       = starship.hyperdriveRating;
    this.starshipClass          = starship.starshipClass;
    this.url                    = starship.url;
  }
}