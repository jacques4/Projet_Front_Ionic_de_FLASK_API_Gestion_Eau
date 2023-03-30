import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from '../models/utilisateur';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formGroup!: FormGroup;
  response: any;
  erreur = "";


  constructor(private builder: FormBuilder,
              private authService: AuthService,
              private route: Router,) { 

  }

  ngOnInit(): void {

    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      login: new FormControl(null,[Validators.required]),
      mdp: new FormControl(null,[Validators.required])
    });
  }


  onLogin(){

    const user = new Utilisateur;
    user.login = this.formGroup.controls['login'].value;
    user.mdp = this.formGroup.controls['mdp'].value;
    console.log(user);
    
     this.authService.login(user).subscribe(result => {
     console.log(result.status);   
      if(result.status == true)
      { 
          this.response = result;
          console.log(this.response);
          console.log(this.formGroup.valid);
          localStorage.setItem('token', this.response.access_token);
          sessionStorage.setItem('user', JSON.stringify(this.response.user));
          this.route.navigate(['../aceuil']);
          
        } else  {
          
          this.erreur='Login ou password incorrect';
        } 

      })
    }

}
