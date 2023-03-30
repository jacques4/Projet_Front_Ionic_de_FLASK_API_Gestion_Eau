import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { Geolocation } from '@ionic-native/geolocation';
import * as L from 'leaflet';
import { Zoom } from 'swiper';

@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.page.html',
  styleUrls: ['./googlemaps.page.scss'],
})
export class GooglemapsPage implements OnInit {
  map?: L.Map;
  data:any;

  constructor(private route:ActivatedRoute) { }
  
  ngOnInit() {

    let data = this.route.snapshot.paramMap.get("client")
    this.data=JSON.parse(data!)
    
   }

 ionViewDidEnter(){

  this.map =  L.map('mapId').setView([35.76943, -5.80081],8);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom:19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(this.map);

  var customIcon = L.icon ({
    iconUrl : '../../assets/marker-svgrepo-com.svg',
    iconSize: [40,40],
    
  });


  L.marker([this.data.lat,this.data.longi],{icon:customIcon}).addTo(this.map) 
   .bindPopup(this.data?.nom + ' '+ this.data.prenom)
   .openPopup();

   
  }


}


