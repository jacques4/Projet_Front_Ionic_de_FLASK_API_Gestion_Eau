import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { Client } from '../models/client';
import { Commande } from '../models/commande';
import { Produit } from '../models/produit';
import { ClientService } from '../services/client.service';
import { CommandeService } from '../services/commande.service';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
})
export class CommandePage implements OnInit {

  commande?: Array<Commande> =  new Array<Commande>();
  currentIndex = -1;
  title = '';
  searchInput: string ="";
  page=1;


  ///////////////////////////////SAVE COMMANDE//////////////////////////////////////////
  
  use:any;
  error="";
  bien="";
  form: FormGroup;
  command?: Commande;
  listeclients: Array<Client> = new Array<Client>();
  listeproduits: Array<Produit> = new Array<Produit>();

  constructor(private commandeService:CommandeService,
    private builder: FormBuilder,
    private clientService: ClientService,
    private produitService: ProduitService,
    private route: Router,
    private router:Router) { 

      this.form = this.builder.group({

        quantite: ['', [Validators.required]],
        client: ['', [Validators.required]],
        produit: ['', [Validators.required]],
      
      });
    }

  ngOnInit(): void {

    this.clientService.getAll().subscribe(data => {
      this.listeclients = data.Clients;
      console.log('chargement de client');
      console.table(this.listeclients);
    });

    this.produitService.getAll().subscribe(data => {
      this.listeproduits = data.produits;
      console.log('chargement de produit');
      console.table(this.listeproduits);
    });


    this.findAll();
    console.log(this.commande);

    sessionStorage.getItem('user');
    this.use = JSON.parse(sessionStorage.getItem('user')!);
    console.log(this.use);

  }

  findAll(): void {
    this.commandeService.getAll()
      .subscribe({
        next: (data) => {
          this.commande = data.Commande;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


  refreshList(): void {
    this.findAll();
    this.currentIndex = -1;
  }

  openDetail(commande:any){
    this.router.navigate(['detaile-commande', {commande:JSON.stringify(commande)}])
  }

  onCreate(){

    this.command = new Commande();

    this.command.id_utilisateur = this.use?.id;
    this.command.id_client = this.listeclients?.find(item => item.id == parseInt( this.form.controls['client'].value))?.id;
    this.command.id_produit = this.listeproduits?.find(item => item.id == parseInt( this.form.controls['produit'].value))?.id;
    this.command.quantite = this.form.controls['quantite'].value;
    console.log(this.command);
    this.commandeService.create(this.command).subscribe(data => {

      if(data.success === true){
        this.findAll();
        this.form.controls['client'] == null;
        this.form.controls['produit'] == null;
        this.form.controls['quantite'] == null;
       }else{
        this.error="Quantite de trop";
       }

       this.findAll();
    });
  }


  search(){
    this.page = 1;
    if (!this.searchInput){
        this.findAll();
    } else {
        // @ts-ignore
        this.commande = this.commande?.filter(m =>
  
             m.produit?.marque?.nom?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase()) ||
             m.client?.nom?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase()) ||
             m.client?.prenom?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase()) ||
             m.quantite?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase()) 
  
        );
    }
  
  }

}


