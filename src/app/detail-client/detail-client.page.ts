import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.page.html',
  styleUrls: ['./detail-client.page.scss'],
})
export class DetailClientPage implements OnInit {

  data:any;
  constructor(private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {

    let data = this.route.snapshot.paramMap.get("client")
    this.data=JSON.parse(data!)
    console.log(this.data.nom);
  }

  openDetail(client:any){
    this.router.navigate(['googlemaps', {client:JSON.stringify(client)}])
  }

}
