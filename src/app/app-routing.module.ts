import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeyondLogoComponent } from './beyond-logo/beyond-logo.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  //{path : ' ' , component : AppComponent},
  {path:'beyond' ,component: BeyondLogoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }
