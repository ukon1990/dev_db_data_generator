import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTableComponent } from './components/create-table/create-table.component';

const routes: Routes = [
  {
    path: '',
    component: CreateTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
