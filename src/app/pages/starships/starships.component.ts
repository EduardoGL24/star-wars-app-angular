import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { StarshipList } from 'src/app/interfaces/starships-response';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  private starshipsIds: string[] = [];
  private routeSub!: Subscription;
  public starShips: StarshipList[] = [];
  public showForm: boolean = false;
  public idStarship: string = '';
  public showLoader: boolean = true;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.routeSub = this.route.params.subscribe(params => {
      this.getStarshipsIds(params['id']);
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  getStarshipsIds(id: string){
    this.apiService.getStarships(id).subscribe((res: string[]) => {
      this.starshipsIds = res.map(starship => starship.replace(/[^0-9]+/g, ""));
      this.getStarships();
    }, err => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An unexpected error has occurred!',
        showConfirmButton: false,
      })
    });
  }

  getStarships(){
    this.starshipsIds.forEach(id => {
      this.apiService.getStarshipToList(id).subscribe(res => {
        this.starShips.push(res);
        this.showLoader = false;
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An unexpected error has occurred!',
          showConfirmButton: false,
        })
      });
    })
  }

  sendIdStarship(id: string){
    this.idStarship = id;
  }
}
