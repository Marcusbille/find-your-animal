import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalResolverService } from 'src/app/shared/services/animal-resolver.service';
import { AnimalsResolverService } from 'src/app/shared/services/animals-resolver.service';
import { AnimalManageComponent } from './animal-manage/animal-manage.component';
import { TableAnimalsComponent } from './table-animals/table-animals.component';


const routes: Routes = [
  {
    path: '',
    component: TableAnimalsComponent,
    pathMatch: 'full',
    resolve: {
      animals: AnimalsResolverService
    }
  },
  {
    path: 'add',
    component: AnimalManageComponent
  },
  {
    path: 'edit/:animalId',
    component: AnimalManageComponent,
    resolve: {
      animal: AnimalResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsRoutingModule { }
