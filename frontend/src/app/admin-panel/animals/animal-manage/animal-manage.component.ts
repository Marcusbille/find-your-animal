import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-animal-manage',
  templateUrl: './animal-manage.component.html',
  styleUrls: ['./animal-manage.component.scss']
})
export class AnimalManageComponent implements OnInit {

  petMain: FormGroup;
  petAdditional: FormGroup;
  petCatchInfo: FormGroup;
  petHealth: FormGroup;
  petImages: FormGroup;
  petMove: FormGroup;
  petOwners: FormGroup;
  petResponsible: FormGroup;
  petSanitation: FormGroup;
  petVaccination: FormGroup;


  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);

  constructor(private fb: FormBuilder,) { }

  ngOnInit() {
  }

  createPetMain() {
    this.petMain = this.fb.group({
      "card_num": ["", [Validators.required]],
      "species": ["", [Validators.required]],
      "age": ["", [Validators.required]],
      "weight": ["", [Validators.required]],
      "name": ["", [Validators.required]],
      "gender": ["", [Validators.required]],
      "breed": ["", [Validators.required]],
      "hair_color": ["", [Validators.required]],
      "hair_type": ["", [Validators.required]],
      "ears_type": ["", [Validators.required]],
      "tail_type": ["", [Validators.required]],
      "size": ["", [Validators.required]],
      "special": ["", [Validators.required]],
      "enclosure": ["", [Validators.required]],

    })
  }

  createPetAdditional() {
    this.petMain = this.fb.group({
      "id_tag": ["", [Validators.required]],
      "ster_date": ["", [Validators.required]],
      "doctor": ["", [Validators.required]],
      "socialised": ["", [Validators.required]],
    })
  }

  createPetCatchInfo() {
    this.petMain = this.fb.group({
      "order_num": ["", [Validators.required]],
      "order_data": ["", [Validators.required]],
      "district": ["", [Validators.required]],
      "catch_report": ["", [Validators.required]],
      "catch_address": ["", [Validators.required]],

    })
  }

  createPetHealth() {
    this.petMain = this.fb.group({
      "check_date": ["", [Validators.required]],
      "anamnesis": ["", [Validators.required]],
    })
  }

  createPetMove() {
    this.petMain = this.fb.group({
      "date_in": ["", [Validators.required]],
      "act": ["", [Validators.required]],
      "date_out": ["", [Validators.required]],
      "reason": ["", [Validators.required]],
      "order": ["", [Validators.required]],

    })
  }

  createPetOwners() {
    this.petMain = this.fb.group({
      "legal_entity": ["", [Validators.required]],
      "guardian": ["", [Validators.required]],
      "individual": ["", [Validators.required]],
    })
  }

  createPetResponsible() {
    this.petMain = this.fb.group({
      "person": ["", [Validators.required]],
    })
  }

  createPetSanitation() {
    this.petMain = this.fb.group({
      "order": ["", [Validators.required]],
      "date": ["", [Validators.required]],
      "medicine": ["", [Validators.required]],
      "dose": ["", [Validators.required]],
    })
  }

  createPetVaccination() {
    this.petMain = this.fb.group({
      "order": ["", [Validators.required]],
      "date": ["", [Validators.required]],
      "vaccine": ["", [Validators.required]],
      "series": ["", [Validators.required]],
    })
  }

}
