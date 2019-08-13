import { Component, OnInit } from '@angular/core';
import { LocationSearchService } from 'src/app/service/location-search.service';
import { Location } from 'src/app/classes/Location';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { EventLocationSearchService } from 'src/app/service/event-location-search.service';
import { Event, Performance, Start } from 'src/app/classes/Event';
import { Artist } from 'src/app/classes/Artist';

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
  events:Event[] = [];


  constructor(
    private locationSearchService:LocationSearchService,
    private eventSearchService:EventLocationSearchService
    ) { }

  ngOnInit() {
  }

  //queries locations based on city / state
  getLocationId(city:string){
    //clear events list
    this.events = [];

    this.locationSearchService.getLocationId(city.toUpperCase(), this.selectedState).subscribe(result => {
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

    //send to get event data
    this.getEventData();
  }

  //get events based on metroId
  getEventData(){
    this.eventSearchService.getEvent(this.locationID)
      .subscribe(event => {
        for(let each of event.resultsPage.results.event){
          // Performance array 
          let tempPerformance: Performance[] = [];
          
          //Start-time Object
          let tempStart:Start = new Start();
          
          //grab performance array that includes artist data:
          for(let perform of each.performance){
            tempPerformance.push(
              new Performance(
                perform.id,
                perform.displayName,
                new Artist(
                  perform.artist.id, 
                  perform.artist.displayName,
                  perform.artist.uri
                  )
              )
            );
          }

          //grab Start-time data
          tempStart.date = each.start.date;
          tempStart.time = each.start.time;

          //grab event data and insert performance date ^
          let tempEvent:Event = new Event();
          tempEvent.id = each.id;
          tempEvent.displayName = each.displayName;
          tempEvent.type = each.type;
          tempEvent.uri = each.uri;
          tempEvent.startTime = tempStart;
          tempEvent.performance = tempPerformance;

          this.events.push(tempEvent);
        }
      });
      console.log(this.events);
  }

  //changes the selected value of the current select option
  selectChangeHandler(event: any) {
    this.selectedState = event.target.value;
  }
}