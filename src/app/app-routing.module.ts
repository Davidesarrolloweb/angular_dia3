import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../../../dia1/src/app/pages/home-page/home-page.component';


const routes: Routes = [
  {path:"home", component:HomePageComponent},
  {path:"ciudades", component:HomePageComponent},
  {path:'**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
