import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in-model',
  templateUrl: './sign-in-model.component.html',
  styleUrls: ['./sign-in-model.component.css']
})
export class SignInModelComponent implements OnInit {
  showSignInModal:boolean;
  constructor() { }

  ngOnInit() {
  }

  onCreate(){
    this.showSignInModal=true;
  }

  changeDisplay(){
    this.showSignInModal=false;
   }

}
