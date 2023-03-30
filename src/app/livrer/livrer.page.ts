import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Commande } from '../models/commande';
import { Livrer } from '../models/livrer';
import { CommandeService } from '../services/commande.service';
import { LivrerService } from '../services/livrer.service';

@Component({
  selector: 'app-livrer',
  templateUrl: './livrer.page.html',
  styleUrls: ['./livrer.page.scss'],
})
export class LivrerPage implements OnInit {

  livrer?: Array<Livrer> =  new Array<Livrer>();
  listecommande?: Array<Commande> =  new Array<Commande>();
  currentIndex = -1;
  title = '';
  searchInput: string ="";
  page=1;

  ///////////////////////////////////////////////
  form: FormGroup;
  send?: Livrer;
  use:any;
  error="";
  bien="bien";
  constructor(private livrerService: LivrerService,
              private router:Router,
              private commandeService: CommandeService,
              private builder: FormBuilder ) { 


                this.form = this.builder.group({

                  quantite: ['', [Validators.required]],
                  date: ['', [Validators.required]],
                  commande: ['', [Validators.required]],
                       
                });
              }

  ngOnInit() {

    this.commandeService.getAll().subscribe(data => {
      this.listecommande = data.Commande;
      console.log('chargement de commande');
      console.table(this.listecommande);
    });

    this.findAll();

        
    sessionStorage.getItem('user');
    this.use = JSON.parse(sessionStorage.getItem('user')!);
    console.log(this.use);
  }

  findAll(): void {
    this.livrerService.getAll()
      .subscribe({
        next: (data) => {
          this.livrer = data.Livrer;
          console.log(this.livrer);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.findAll();
    this.currentIndex = -1;
  }

  openDetail(livrer:any){
    this.router.navigate(['dtail-livrer', {livrer:JSON.stringify(livrer)}])
  }

  onCreate(){
    this.send = new Livrer();

    this.send.id_utilisateur = this.use?.id;
    this.send.id_commande = this.listecommande?.find(item => item.id == parseInt( this.form.controls['commande'].value))?.id;
    this.send.quantite = this.form.controls['quantite'].value;
    this.send.date = this.form.controls['date'].value;
    console.log(this.livrer);
    this.livrerService.create(this.send).subscribe(data => {
 
      if(data.success === true){
        this.bien="Enregistrer";      
        this.findAll();
        
       }else{
        this.error="Quantite de trop";
       }

       this.findAll();
      
    });

  }


  search(){

  }
}
