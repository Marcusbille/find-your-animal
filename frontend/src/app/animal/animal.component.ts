import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../admin-panel/animals/table-animals/table-animals.component';
import { Shelter } from '../shared/models/shelter.model';
import { Location } from '@angular/common';


@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {

  previous: any;
  animal: Animal;
  shelter: Shelter;

  constructor(private dialog: MatDialog, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.animal = this.route.snapshot.data.animal;
    this.shelter = this.route.snapshot.data.shelter;
  }

  clickedMarker(infowindow) {
    console.log(this.previous);
    if (this.previous) {
      this.previous.close();
    }
    this.previous = infowindow;
  }

  // openAuthDialog() {
  //   let dialogRef = this.dialog.open(RequestComponent, {
  //     autoFocus: false
  //   });
  // }

  goBack() {
    this.location.back();
  }

}
