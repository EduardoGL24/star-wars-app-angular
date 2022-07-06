import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { StarshipList } from 'src/app/interfaces/starships-response';
import { ApiService } from 'src/app/services/api.service';

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
      console.log(err);
    });
  }

  getStarships(){
    this.starshipsIds.forEach(id => {
      this.apiService.getStarshipToList(id).subscribe(res => {
        this.starShips.push(res);
      }, err => {
        console.log(err);
      });
    })
  }

  sendIdStarship(id: string){
    console.log('se mando');
    console.log(id);
    this.idStarship = id;
    console.log(this.idStarship);
  }
}
