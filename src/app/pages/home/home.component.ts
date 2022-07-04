import { Component, OnInit } from '@angular/core';
import { FilmsResults } from 'src/app/interfaces/films-response';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public films: FilmsResults[] = [];

  constructor(private apiService: ApiService) {
    this.apiService.getFilms().subscribe((res: FilmsResults[]) => {
      this.films = res;
    }, err => {
      console.log(err);
    })
  }

  ngOnInit(): void {
  }

}
