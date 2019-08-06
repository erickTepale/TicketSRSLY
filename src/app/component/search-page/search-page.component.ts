import { Component, OnInit } from '@angular/core';
import { LocationSearchService } from 'src/app/service/location-search.service';
import { Location } from 'src/app/classes/Location';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})

export class SearchPageComponent implements OnInit {
  city:string;
  state:string;
  locationID:number;
  selectedState:string;
  locationArr:any[];


  constructor(private locationSearch:LocationSearchService) { }

  ngOnInit() {
  }

  //queries locations based on city / state
  getLocationId(city:string){
    this.locationSearch.getLocationId(city.toUpperCase(), this.selectedState).subscribe(result => {
      this.locationArr = result.resultsPage.results.location;
      console.log(this.locationArr);
      this.parseData(city.toUpperCase());
    });
  }

  //gets the locationId array and parses it
  parseData(city:string){
    this.locationArr.forEach(location => {
      if(location.city.displayName.toUpperCase() == city && location.city.state.displayName.toUpperCase() == this.selectedState
        ){
          
          this.locationID = location.metroArea.id;
          this.city = location.city.displayName;
          this.state = location.city.state.displayName;
        }
    });

    console.log(this.locationID);
  }

  //changes the selected value of the current select option
  selectChangeHandler(event: any) {
    this.selectedState = event.target.value;
  }
}