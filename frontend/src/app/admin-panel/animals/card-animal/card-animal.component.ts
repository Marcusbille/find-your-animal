import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-animal',
  templateUrl: './card-animal.component.html',
  styleUrls: ['./card-animal.component.scss']
})
export class CardAnimalComponent implements OnInit {

  petNum: string[] = ['1', '2'];

  constructor() { }

  ngOnInit(): void {
  }

}
