import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LocationSearchService {

  constructor(private http:HttpClient) { }

  getLocationId(city:string, state:string):any{
    return this.http.get(environment.songkickapi + "search/locations.json?query= "+ city + " " + state + "&apikey=" + environment.apiKey);
  }

  
}
