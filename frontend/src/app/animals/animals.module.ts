import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsComponent } from './animals.component';
import { AnimalsListComponent } from './animals-list/animals-list.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PetFiltersModule } from '../shared/pipes/pet-filters/pet-filters.module';



@NgModule({
  declarations: [AnimalsComponent, AnimalsListComponent],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    NgxPaginationModule,
    MatCheckboxModule,
    MatExpansionModule,
    FontAwesomeModule,
    PetFiltersModule
  ]
})
export class AnimalsModule { }
