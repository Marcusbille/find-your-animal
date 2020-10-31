import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

export interface Animal {
  card_num: string;
  species: string;
  age: string;
  weight: number;
  name: string;
  gender: string;
  breed: string;
  hair_color: string;
  hair_type: string;
  size: string;
  id_tag: number;
  shelter_name: string;
  district: string;
  date_in: string;
  reason: string;
  socialised: string;
}

const ELEMENT_DATA: Animal[] = [
  {
    card_num: '1', species: 'кот', age: '23.12.2009', weight: 3.23, name: 'Кузя', gender: 'женский', breed: 'метис', hair_color: 'черный', hair_type: 'короткая', size: 'средний',
    id_tag: 12121212121, shelter_name: 'приют им. Гагарина', district: 'ВАО', date_in: '12.10.2010', reason: 'умер', socialised: 'да'
  },
  {
    card_num: '2', species: 'собака', age: '23.12.2009', weight: 3.23, name: 'Кузя', gender: 'мужской', breed: 'мопс', hair_color: 'серый', hair_type: 'короткая', size: 'средний',
    id_tag: 12121212121, shelter_name: 'приют им. Гагарина', district: 'ВАО', date_in: '12.10.2010', reason: 'умер', socialised: 'да'
  },
  {
    card_num: '3', species: 'собака', age: '23.12.2009', weight: 3.23, name: 'Кузя', gender: 'женский', breed: 'кек', hair_color: 'рыжий', hair_type: 'короткая', size: 'средний',
    id_tag: 12121212121, shelter_name: 'приют им. Барышкина', district: 'ВАО', date_in: '12.10.2010', reason: 'умер', socialised: 'да'
  },
  {
    card_num: '1', species: 'кот', age: '23.12.2009', weight: 3.23, name: 'Кузя', gender: 'мужской', breed: 'лол', hair_color: 'белый', hair_type: 'короткая', size: 'средний',
    id_tag: 12121212121, shelter_name: 'приют им. Шишкина', district: 'ВАО', date_in: '12.10.2010', reason: 'умер', socialised: 'да'
  },
  {
    card_num: '1', species: 'собака', age: '23.12.2009', weight: 3.23, name: 'Кузя', gender: 'мужской', breed: 'метис', hair_color: 'черный', hair_type: 'короткая', size: 'средний',
    id_tag: 12121212121, shelter_name: 'приют им. Пушкина', district: 'ВАО', date_in: '12.10.2010', reason: 'умер', socialised: 'да'
  },

];


@Component({
  selector: 'app-table-animals',
  templateUrl: './table-animals.component.html',
  styleUrls: ['./table-animals.component.scss']
})
export class TableAnimalsComponent implements OnInit {

  displayedColumns: string[] = ['card_num', 'species', 'age', 'weight', 'name', 'gender', 'breed', 'hair_color', 'hair_type', 'size', 'id_tag', 'shelter_name', 'district', 'date_in', 'reason', 'socialised', 'actions'];
  dataSource: any;
  animals: any[];

  searchStr: string;
  filters = [];
  filtersToDelete = ['card_num', 'age', 'weight', 'name', 'breed', 'id_tag', 'date_in', 'reason'];
  activeFilters = [];
  lastAddedFilter: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.animals = this.route.snapshot.data.animals;
    this.dataSource = new MatTableDataSource(this.animals);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    for (let field in this.animals[0]) {
      this.getFilters(this.animals, field);
    }
  }

  updateTable() {
    this.dataSource.filter = this.searchStr;
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
    this.lastAddedFilter = filterName;
    this.dataSource.data = this.filterArray(this.animals, this.activeFilters);
  }

  removeFilter(filterName: string, filterOption: string) {
    let curFilter = this.activeFilters.find(filter => filter.name == filterName);
    let optionIndex = curFilter.options.findIndex(item => item.option == filterOption);
    curFilter.options.splice(optionIndex, 1);
    this.dataSource.data = this.filterArray(this.animals, this.activeFilters);
  }

  checkDisabled(filterName: string, filterOption: string, array: any, checkbox: MatCheckbox) {
    if (this.lastAddedFilter != filterName) {
      if (array.filter(item => item[filterName] == filterOption).length > 0) {
        return false;
      }
      else
        return true;
    } else {
      if (checkbox.disabled)
        return true;
      else
        return false;
    }
  }

  filterArray(array: any[], filters: any[]) {
    let pipedPets = [];
    let optionArray = [];
    let emptyFilters = 0;
    for (let filter of filters) {
      if (filter.options.length > 0) {
        for (let item of filter.options) {
          if (pipedPets.length > 0) {
            if (filter.options.length == 1) {
              pipedPets = pipedPets.filter(pet => pet[filter.name] == item.option);
            }
            else {
              let filteredPets;
              filteredPets = pipedPets.filter(pet => pet[filter.name] == item.option);
              filteredPets.forEach(pet => {
                optionArray.push(pet);
              });
            }
          }
          else {
            let filteredPets;
            filteredPets = array.filter(pet => pet[filter.name] == item.option);
            filteredPets.forEach(pet => {
              optionArray.push(pet);
            });
          }
        }
        if (optionArray.length > 0) {
          pipedPets.splice(0, pipedPets.length);
          optionArray.forEach(item => pipedPets.push(item));
          optionArray.splice(0, optionArray.length);
        }
      } else
        emptyFilters++;
    }
    if (emptyFilters == filters.length)
      return array;
    return pipedPets;
  }

  addNew() {
    this.router.navigate([this.router.url, 'add']);
  }
}
