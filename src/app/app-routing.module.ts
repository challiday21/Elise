import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';

const routes: Routes = [
  { path: '', component: PageAccueilComponent }, // ici on créer une url associée à notre composant PageAccueil
  { path: 'sign-in', component: PageSignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }