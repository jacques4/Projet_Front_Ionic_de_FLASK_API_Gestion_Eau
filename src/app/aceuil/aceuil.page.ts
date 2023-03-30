import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';



@Component({
  selector: 'app-aceuil',
  templateUrl: './aceuil.page.html',
  styleUrls: ['./aceuil.page.scss'],
})
export class AceuilPage implements OnInit {
use:any;

  constructor( 
    ) { }

  ngOnInit() {

    sessionStorage.getItem('user');
    this.use = JSON.parse(sessionStorage.getItem('user')!);
    console.log(this.use);
  }



  
}
