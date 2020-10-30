import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalManageComponent } from './animal-manage/animal-manage.component';
import { TableAnimalsComponent } from './table-animals/table-animals.component';


const routes: Routes = [
  {
    path: '',
    component: TableAnimalsComponent,
    pathMatch: 'full'
  },
  {
    path: 'add',
    component: AnimalManageComponent
  },
  {
    path: 'edit/:animalId',
    component: AnimalManageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsRoutingModule { }
