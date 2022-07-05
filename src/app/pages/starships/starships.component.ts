import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  public starships: string[] = [];

  constructor(private apiService: ApiService) {
    this.apiService.getStarships('2').subscribe((res: string[]) => {
      console.log(res)
      this.starships = res;
    }, err => {
      console.log(err);
    })
  }

  ngOnInit(): void {
  }

}
