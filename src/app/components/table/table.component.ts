import { Component, Injectable, OnInit } from '@angular/core';
import { FilmsResponse, FilmsResults } from 'src/app/interfaces/films-response';
import { ApiService } from 'src/app/services/api.service';

@Injectable()
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public films: FilmsResults[] = [];

  constructor(private apiService: ApiService) {
    this.apiService.getFilms().subscribe((res: FilmsResults[]) => {
      console.log(res);
      this.films = res;
    }, err => {
      console.log(err);
    })
  }

  ngOnInit(): void {
  }


}
