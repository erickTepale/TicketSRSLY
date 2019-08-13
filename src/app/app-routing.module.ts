import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { SearchPageComponent } from './component/search-page/search-page.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent, pathMatch: 'full'},
  {path: 'eventSearch' , component: SearchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
