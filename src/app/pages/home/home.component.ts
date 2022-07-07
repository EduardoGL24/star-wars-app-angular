import { Component, OnInit } from '@angular/core';
import { FilmsResults } from 'src/app/interfaces/films-response';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public films: FilmsResults[] = [];
  public showLoader: boolean = true;

  constructor(private apiService: ApiService) {
    this.apiService.getFilms().subscribe((res: FilmsResults[]) => {
      this.films = res;
      this.showLoader = false;
    }, err => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An unexpected error has occurred!',
        showConfirmButton: false,
      })
    })
  }

  ngOnInit(): void {
  }

}
