import { AuthGuard } from './shared/auth.guard';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const patientsModule = () => import('./patients/patients.module').then(m => m.PatientsModule);
const authModule = () => import('./auth/auth.module').then(m => m.AuthModule);

export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'patients', loadChildren: patientsModule, canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: authModule }
  //,
  //{ path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
