import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  routeName: string = '';
  event$
 
  constructor(private location: Location) {
    this.event$ = location.onUrlChange((val) => {
      this.routeName = val.replace("/", "");
    })
  }

  ngOnInit(): void {
    
  }

}
