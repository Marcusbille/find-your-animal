import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-animal',
  templateUrl: './card-animal.component.html',
  styleUrls: ['./card-animal.component.scss']
})
export class CardAnimalComponent implements OnInit {

  animal: any;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.animal = this.route.snapshot.data.animal;
    console.log(this.animal);
  }

  goBack() {
    this.location.back();
  }

}
