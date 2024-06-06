import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CommitteeMembersComponent } from './committee-members/committee-members.component';
import { HomeComponent } from './home/home.component';
import { TrusteesComponent } from './trustees/trustees.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'committee-members', component: CommitteeMembersComponent },
  { path: 'trustees', component: TrusteesComponent },
  { path: 'about-us', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }