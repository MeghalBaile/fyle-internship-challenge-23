import { NgModule } from '@angular/core';
import { RepoListComponent } from './repo-list/repo-list.component';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {path:'repo-list', component:RepoListComponent},
  {path:'', component:UserFormComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

