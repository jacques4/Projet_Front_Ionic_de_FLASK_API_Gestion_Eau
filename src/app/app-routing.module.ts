import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/shared/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'aceuil',
    loadChildren: () => import('./aceuil/aceuil.module').then( m => m.AceuilPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'client',
    loadChildren: () => import('./client/client.module').then( m => m.ClientPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'produit',
    loadChildren: () => import('./produit/produit.module').then( m => m.ProduitPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'commande',
    loadChildren: () => import('./commande/commande.module').then( m => m.CommandePageModule),canActivate:[AuthGuard]
  },
  {
    path: 'detail-client',
    loadChildren: () => import('./detail-client/detail-client.module').then( m => m.DetailClientPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'detaile-commande',
    loadChildren: () => import('./detaile-commande/detaile-commande.module').then( m => m.DetaileCommandePageModule),canActivate:[AuthGuard]
  },
  {
    path: 'googlemaps',
    loadChildren: () => import('./googlemaps/googlemaps.module').then( m => m.GooglemapsPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'livrer',
    loadChildren: () => import('./livrer/livrer.module').then( m => m.LivrerPageModule)
  },
  {
    path: 'dtail-livrer',
    loadChildren: () => import('./dtail-livrer/dtail-livrer.module').then( m => m.DtailLivrerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
