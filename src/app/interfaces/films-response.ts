export interface FilmsResponse {
  count:    number;
  next:     null | number;
  previous: null | number;
  results:  FilmsResults[];
}

export interface FilmsResults {
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