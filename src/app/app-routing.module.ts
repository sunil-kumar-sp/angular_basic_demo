import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserPageComponent} from "./user-page/user-page.component"
import {TestCompComponent} from "./test-comp/test-comp.component"

const routes: Routes = [
  {path:"",component:UserPageComponent},
  {path:"page2",component:TestCompComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})


export class AppRoutingModule { }
