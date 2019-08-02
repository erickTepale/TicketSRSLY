import { Component, OnInit } from '@angular/core';
import { LocationSearchService } from 'src/app/service/location-search.service';
import { Location } from 'src/app/classes/Location';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  city:string;
  state:string;
  locationID:number;


  constructor(private locationSearch:LocationSearchService) { }

  ngOnInit() {
    //this.printLocation();
  }

  printLocation(){
    this.locationSearch.getLocationId().subscribe(location => {
      this.locationID = location.resultsPage.results.location[0].metroArea.id;
      console.log(this.locationID);
      this.city = location.resultsPage.results.location[0].city.displayName;
      console.log(this.city);
      this.state = location.resultsPage.results.location[0].city.state.displayName;
      console.log(this.state);
    });
  }

}
