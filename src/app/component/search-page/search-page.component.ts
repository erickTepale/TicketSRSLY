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


  constructor(private locationSearch:LocationSearchService) { }

  ngOnInit() {
  }

  getLocationId(city:string){
    this.locationSearch.getLocationId(city, this.selectedState).subscribe(location => {
      this.locationID = location.resultsPage.results.location[0].metroArea.id;
      this.city = location.resultsPage.results.location[0].city.displayName;
      this.state = location.resultsPage.results.location[0].city.state.displayName;
    });
  }

  //changes the selected value of the current select option
  selectChangeHandler(event: any) {
    this.selectedState = event.target.value;
  }
}
