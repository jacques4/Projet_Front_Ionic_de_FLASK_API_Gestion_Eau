import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
use:any;

  constructor(private authService: AuthService,
    private route: Router) {}


  ngOnInit(): void {

     sessionStorage.getItem('user');
    this.use = JSON.parse(sessionStorage.getItem('user')!);
    console.log(this.use);
  }

  logout(){

    if(this.authService.logout() || this.authService.logout_s()){
 
     localStorage.removeItem('token');
     localStorage.clear();
     sessionStorage.removeItem('user');
     sessionStorage.clear();
     this.route.navigate(["/login"]);
    }
 
 }
}
