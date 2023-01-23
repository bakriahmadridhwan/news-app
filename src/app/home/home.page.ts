import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  info:any = {};

  constructor(private route:Router) {}

  saveData(){
    console.log(this.info);
  }

  scorePage(){
    this.route.navigate(['/score']);
  }

  dataPage(){
    this.route.navigate(['/data']);
  }


}
