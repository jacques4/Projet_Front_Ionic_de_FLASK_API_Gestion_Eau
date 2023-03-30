import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from '../models/client';
import { TypeClient } from '../models/typeclient';
import { ClientService } from '../services/client.service';
import { TypeclientService } from '../services/typeclient.service';
import { Geolocation } from '@capacitor/geolocation';
import { AlertController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';



@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {

  client?: Array<Client> =  new Array<Client>();
  currentIndex = -1;
  title = '';
  searchInput: string ="";
  page=1;

/////############################////////////////////////////SAVE////////////////////////////////###########################

  costomer?:Client
  isHiden=false;
  isHiden2=false;
  use:any;
  form: FormGroup;
  listeTypeClient: Array<TypeClient> = new Array<TypeClient>();

  constructor(private clientService: ClientService,
              private router:Router,
              private typeClientService: TypeclientService,
              private builder: FormBuilder,
              private alertController: AlertController ) { 

                this.form = this.builder.group({

                  nom : ['',Validators.required],
                  prenom: ['', [Validators.required]],
                  email: ['', [Validators.required]],
                  tel: ['', [Validators.required]],
                  adresse: ['', [Validators.required]],
                  typeClient: ['',[Validators.required]],
                  position: ['',[Validators.required]],
                  nif: ['',[Validators.required]],
                  numrccm: ['',[Validators.required]],
                       
                });
              }

  ngOnInit() {

    sessionStorage.getItem('user');
    this.use = JSON.parse(sessionStorage.getItem('user')!);
    console.log(this.use);

    this.typeClientService.getAll().subscribe(data => {
      this.listeTypeClient = data.typeclient;
      console.log('chargement de type client');
      console.table(this.listeTypeClient);
    });

    this.findAll();
    this.printCurrentPosition()
  }

  findAll(): void {
    this.clientService.getAll()
      .subscribe({
        next: (data) => {
          this.client = data.Clients;
          console.log(this.client);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.findAll();
    this.currentIndex = -1;
  }

  handleRefresh(event:any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 1000);
  };

  openDetail(client:any){
    this.router.navigate(['detail-client', {client:JSON.stringify(client)}])
  }

  controlOnChange(event : any){
    if(event.target.checked){
      this.form.controls['position'].setValue(event.target.checked);
    } else {
      console.log(event.target.checked)
      this.form.controls['position'].setValue(event.target.checked);
    } 
  }

  onSelectClient(){
    this.costomer = new Client();

    this.costomer.typeclient = this.listeTypeClient?.find(item => item.id== this.form.controls['typeClient'].value);
     if(this.costomer.typeclient?.nom === 'societe'){
          this.isHiden = true;
          this.form.controls['prenom'].disable();
     }
     else{

       this.isHiden2 = true;
       this.form.controls['numrccm'].disable();
       this.form.controls['nif'].disable();
     }
    

  }

  printCurrentPosition = async () => {

    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current position:', coordinates);
    localStorage.setItem('lat', coordinates.coords.latitude.toString())
    localStorage.setItem('longi',coordinates.coords.longitude.toString())
    console.log(coordinates.coords.latitude);
    console.log(coordinates.coords.longitude);

  };

  onCreate(){

    this.costomer = new Client();

    this.costomer.id_typeclient = this.listeTypeClient?.find(item => item.id == parseInt( this.form.controls['typeClient'].value))?.id;
    //this.costomer.id_utilisateur = this.use?.id;
    this.costomer.nom = this.form.controls['nom'].value;
    this.costomer.prenom = this.form.controls['prenom'].value;
    this.costomer.adresse = this.form.controls['adresse'].value;
    this.costomer.tel = this.form.controls['tel'].value;
    this.costomer.nif = this.form.controls['nif'].value;
    this.costomer.numrccm =this.form.controls['numrccm'].value;
    this.costomer.email = this.form.controls['email'].value;
    this.costomer.longi = parseFloat(localStorage.getItem('longi')!) 
    this.costomer.lat = parseFloat(localStorage.getItem('lat')!)
    this.costomer.id_utilisateur = this.use?.id;
    console.log(this.costomer);

    this.clientService.create(this.costomer).subscribe(data => {
      
    this.findAll();
     //   this.activeModal.close(true);  
    });
  }

  search(){
    this.page = 1;
    if (!this.searchInput){
        this.findAll();
    } else {
        // @ts-ignore
        this.client = this.client?.filter(m =>
  
             m.nom?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase()) ||
             m.prenom?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase()) ||
             m.email?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase()) ||
             m.adresse?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase()) ||
             m.tel?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase()) ||
             m.numrccm?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase())
  
  
  
        );
    }
  
  }
  

  }

