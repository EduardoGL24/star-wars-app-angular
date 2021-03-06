export interface starshipsResponse {
  title:         string;
  episode_id:    number;
  opening_crawl: string;
  director:      string;
  producer:      string;
  release_date:  Date;
  characters:    string[];
  planets:       string[];
  starships:     string[];
  vehicles:      string[];
  species:       string[];
  created:       Date;
  edited:        Date;
  url:           string;
}

export interface Starship {
  name:                   string;
  model:                  string;
  manufacturer:           number;
  cost_in_credits:        string;
  length:                 string;
  max_atmosphering_speed: string;
  crew:                   string;
  passengers:             string;
  cargo_capacity:         string;
  consumables:            string;
  hyperdrive_rating:      string;
  MGLT:                   string;
  starship_class:         string;
  pilots:                 any[];
  films:                  string[];
  created?:                Date;
  edited:                 Date;
  url:                    string;
}

export interface StarshipList {
  name: string;
  url: string;
}