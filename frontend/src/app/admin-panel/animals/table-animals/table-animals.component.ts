import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

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
    card_num: '1', species: 'кот', age: '23.12.2009', weight: 3.23, name: 'Кузя', gender: 'мужской', breed: 'метис', hair_color: 'черный', hair_type: 'короткая', size: 'средний',
    id_tag: 12121212121, shelter_name: 'приют им. Гагарина', district: 'ВАО', date_in: '12.10.2010', reason: 'умер', socialised: 'да'
  },
  {
    card_num: '2', species: 'собака', age: '23.12.2009', weight: 3.23, name: 'Кузя', gender: 'мужской', breed: 'метис', hair_color: 'черный', hair_type: 'короткая', size: 'средний',
    id_tag: 12121212121, shelter_name: 'приют им. Гагарина', district: 'ВАО', date_in: '12.10.2010', reason: 'умер', socialised: 'да'
  },
  {
    card_num: '3', species: 'собака', age: '23.12.2009', weight: 3.23, name: 'Кузя', gender: 'мужской', breed: 'метис', hair_color: 'черный', hair_type: 'короткая', size: 'средний',
    id_tag: 12121212121, shelter_name: 'приют им. Барышкина', district: 'ВАО', date_in: '12.10.2010', reason: 'умер', socialised: 'да'
  },
  {
    card_num: '1', species: 'кот', age: '23.12.2009', weight: 3.23, name: 'Кузя', gender: 'мужской', breed: 'метис', hair_color: 'черный', hair_type: 'короткая', size: 'средний',
    id_tag: 12121212121, shelter_name: 'приют им. Шишкина', district: 'ВАО', date_in: '12.10.2010', reason: 'умер', socialised: 'да'
  },
  {
    card_num: '1', species: 'кот', age: '23.12.2009', weight: 3.23, name: 'Кузя', gender: 'мужской', breed: 'метис', hair_color: 'черный', hair_type: 'короткая', size: 'средний',
    id_tag: 12121212121, shelter_name: 'приют им. Пушкина', district: 'ВАО', date_in: '12.10.2010', reason: 'умер', socialised: 'да'
  },

];


@Component({
  selector: 'app-table-animals',
  templateUrl: './table-animals.component.html',
  styleUrls: ['./table-animals.component.scss']
})
export class TableAnimalsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['card_num', 'species', 'age', 'weight', 'name', 'gender', 'breed', 'hair_color', 'hair_type', 'size', 'id_tag', 'shelter_name', 'district', 'date_in', 'reason', 'socialised', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  searchStr: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  updateTable() {
    this.dataSource.filter = this.searchStr;
  }

}
