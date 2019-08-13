import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventLocationSearchService {

  constructor(private http:HttpClient) { }

  //return events list based on metro-area-id
  getEvent(metroId:number):any{
    return this.http.get(environment.songkickapi + "metro_areas/" + metroId +"/calendar.json?apikey=" + environment.apiKey);
  }
}
