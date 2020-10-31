import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShelterRoutingModule } from './shelter-routing.module';
import { ShelterComponent } from './shelter.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { PetFiltersPipe } from '../shared/pipes/pet-filters.pipe';


@NgModule({
  declarations: [ShelterComponent, PetFiltersPipe],
  imports: [
    CommonModule,
    ShelterRoutingModule,
    MatCheckboxModule,
    MatExpansionModule,
    FontAwesomeModule,
    NgxPaginationModule,
  ]
})
export class ShelterModule { }
