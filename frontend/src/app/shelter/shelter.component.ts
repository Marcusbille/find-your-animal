import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { ActivatedRoute } from '@angular/router';
import { Shelter } from '../shared/models/shelter.model';
import { AnimalService } from '../shared/services/animal.service';

@Component({
  selector: 'app-shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.scss']
})
export class ShelterComponent implements OnInit {

  shelter_id: number;
  animals: any[];
  shelter: Shelter;
  filters = [];
  filtersToDelete = ['id', 'name', 'eye_color', 'description', 'disability', 'shelter_id', 'state', 'Pets_images'];
  activeFilters = [];
  filtersIsLoaded = false;
  curPage: number = 1;
  lastAddedFilter: string;

  @ViewChild('petList') petList: ElementRef;

  constructor(private animalService: AnimalService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.shelter = this.activatedRoute.snapshot.data['shelter'];
    this.getPetsByShelter(this.shelter.id);
  }

  getPetsByShelter(id: number) {
    this.animalService.getPetsByShelter(id).subscribe(data => {
      this.animals = data;
      for (let field in data[0]) {
        this.getFilters(data, field);
      }
      this.filtersIsLoaded = true;
    })
  }

  pageChanged(event) {
    this.curPage = event;
    this.petList.nativeElement.scrollIntoView({ behavior: "smooth" });
  }

  getFilters(array: any[], field: string) {
    if (!this.filtersToDelete.find(item => item == field)) {
      this.filters.push({
        name: field,
        options: [...new Set(array.map(item => item[`${field}`]))].sort()
      });
      this.activeFilters.push({
        name: field,
        options: []
      });
    }
  }

  changeFilter(event: any, filterName: string, filterOption: string) {
    if (event.checked == true)
      this.addFilter(filterName, filterOption);
    else
      this.removeFilter(filterName, filterOption);
  }

  addFilter(filterName: string, filterOption: string) {
    let curFilter = this.activeFilters.find(filter => filter.name == filterName);
    curFilter.options.push({
      option: filterOption
    });
    this.activeFilters = this.activeFilters.slice();
    this.lastAddedFilter = filterName;
  }

  removeFilter(filterName: string, filterOption: string) {
    let curFilter = this.activeFilters.find(filter => filter.name == filterName);
    let optionIndex = curFilter.options.findIndex(item => item.option == filterOption);
    curFilter.options.splice(optionIndex, 1);
    this.activeFilters = this.activeFilters.slice();
  }

  checkDisabled(filterName: string, filterOption: string, array: any[], checkbox: MatCheckbox) {
    if (this.lastAddedFilter != filterName) {
      if (array.filter(item => item[filterName] == filterOption).length > 0)
        return false;
      else
        return true;
    } else {
      if (checkbox.disabled)
        return true;
      else
        return false;
    }
  }

}
