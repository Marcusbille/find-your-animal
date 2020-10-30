import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsComponent } from './animals.component';
import { TableAnimalsComponent } from './table-animals/table-animals.component';
import { AnimalManageComponent } from './animal-manage/animal-manage.component';


@NgModule({
  declarations: [AnimalsComponent, TableAnimalsComponent, AnimalManageComponent],
  imports: [
    CommonModule,
    AnimalsRoutingModule
  ]
})
export class AnimalsModule { }
