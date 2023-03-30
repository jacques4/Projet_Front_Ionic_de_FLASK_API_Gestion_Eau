import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detaile-commande',
  templateUrl: './detaile-commande.page.html',
  styleUrls: ['./detaile-commande.page.scss'],
})
export class DetaileCommandePage implements OnInit {

  data:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    let data = this.route.snapshot.paramMap.get("commande")
    this.data=JSON.parse(data!)
    console.log(this.data.nom);
  }

}
