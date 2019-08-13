import { Component, OnInit } from '@angular/core';
import { EventLocationSearchService } from 'src/app/service/event-location-search.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  selectedState:string = '';

  constructor(private eventSearch:EventLocationSearchService) { }

  ngOnInit() {
  }

  search(city:string, state:string){

  }

   //changes the selected value of the current select option
   selectChangeHandler(event: any) {
    this.selectedState = event.target.value;
  }

}
