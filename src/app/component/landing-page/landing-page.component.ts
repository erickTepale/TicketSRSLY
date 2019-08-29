import { Component, OnInit } from '@angular/core';
import { EventLocationSearchService } from 'src/app/service/event-location-search.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  selectedState:string = '';
  showSignInModal:boolean;
  showRegisterInModal:boolean;

  constructor(private eventSearch:EventLocationSearchService) { }

  ngOnInit() {
  }

  search(city:string){

  }

  showLogin(){
    this.showSignInModal=true;
  }

  showRegister(){
    this.showRegisterInModal = true;
  }

  removeModels(){
    this.showSignInModal=false;
    this.showRegisterInModal=false;
   }

   //changes the selected value of the current select option
   selectChangeHandler(event: any) {
    this.selectedState = event.target.value;
  }

}
