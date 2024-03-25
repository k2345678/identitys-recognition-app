import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentityComponent } from './identity/identity.component';


const routes: Routes = [
  { path: 'identity', component: IdentityComponent },
  { path: '', redirectTo: '/identity', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
