import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dtail-livrer',
  templateUrl: './dtail-livrer.page.html',
  styleUrls: ['./dtail-livrer.page.scss'],
})
export class DtailLivrerPage implements OnInit {

  data:any;
  constructor(private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {

    let data = this.route.snapshot.paramMap.get("livrer")
    this.data=JSON.parse(data!)
    console.log(this.data.nom);
  }

 

}
