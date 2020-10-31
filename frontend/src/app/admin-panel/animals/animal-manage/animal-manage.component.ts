import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';



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
  curId: number;
  animal: any;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.createPetMain();
    this.createPetAdditional();
    this.createPetCatchInfo();
    this.createPetHealth();
    this.createPetMove();
    this.createPetOwners();
    this.createPetResponsible();
    this.createPetSanitation();
    this.createPetVaccination();
    this.curId = this.route.snapshot.params['animalId'];
  }

  ngOnInit() {
    if (this.curId) {
      this.animal = this.route.snapshot.data.animal;
      console.log(this.animal);
      this.patchPetMain();
      this.patchPetAdditional();
      this.patchPetCatchInfo();
      this.patchPetHealth();
      this.patchPetMove();
      //this.patchPetOwners();
      this.patchPetResponsible();
      //this.patchPetSanitation();
      //this.patchPetVaccination();
    }
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
    });
  }

  createPetAdditional() {
    this.petAdditional = this.fb.group({
      "id_tag": ["", [Validators.required]],
      "ster_date": ["", [Validators.required]],
      "doctor": ["", [Validators.required]],
      "socialised": ["", [Validators.required]],
    });
  }

  createPetCatchInfo() {
    this.petCatchInfo = this.fb.group({
      "order_num": ["", [Validators.required]],
      "order_data": ["", [Validators.required]],
      "district": ["", [Validators.required]],
      "catch_report": ["", [Validators.required]],
      "catch_address": ["", [Validators.required]],
    });
  }

  createPetHealth() {
    this.petHealth = this.fb.group({
      "check_date": ["", []],
      "anamnesis": ["", []],
    });
  }

  createPetMove() {
    this.petMove = this.fb.group({
      "date_in": ["", [Validators.required]],
      "act": ["", [Validators.required]],
      "date_out": ["", []],
      "reason": ["", []],
      "order": ["", []],
    });
  }

  createPetOwners() {
    this.petOwners = this.fb.group({
      "legal_entity": ["", []],
      "guardian": ["", []],
      "individual": ["", []],
    });
  }

  createPetResponsible() {
    this.petResponsible = this.fb.group({
      "shelter": ["", [Validators.required]],
      "person": ["", [Validators.required]],
    });
  }

  createPetSanitation() {
    this.petSanitation = this.fb.group({
      "order": ["", []],
      "date": ["", []],
      "medicine": ["", []],
      "dose": ["", []],
    });
  }

  createPetVaccination() {
    this.petVaccination = this.fb.group({
      "order": ["", []],
      "date": ["", []],
      "vaccine": ["", []],
      "series": ["", []],
    });
  }

  patchPetMain() {
    this.petMain.patchValue(
      {
        card_num: this.animal.card_num,
        species: this.animal.species,
        age: this.animal.age,
        weight: this.animal.weight,
        name: this.animal.name,
        gender: this.animal.gender,
        hair_color: this.animal.hair_color,
        hair_type: this.animal.hair_type,
        ears_type: this.animal.ears_type,
        tail_type: this.animal.tail_type,
        size: this.animal.size,
        special: this.animal.special,
        enclosure: this.animal.enclosure,
      });
  }

  patchPetAdditional() {
    this.petAdditional.patchValue(
      {
        id_tag: this.animal.Pets_additional.id_tag,
        ster_date: this.animal.Pets_additional.ster_date,
        doctor: this.animal.Pets_additional.doctor,
        socialised: this.animal.Pets_additional.socialised,
      });
  }

  patchPetCatchInfo() {
    this.petCatchInfo.patchValue(
      {
        order_num: this.animal.Pets_catch_info.order_num,
        order_data: this.animal.Pets_catch_info.order_data,
        district: this.animal.Pets_catch_info.district,
        catch_report: this.animal.Pets_catch_info.catch_report,
        catch_address: this.animal.Pets_catch_info.catch_address
      });
  }

  patchPetHealth() {
    this.petHealth.patchValue({
      check_data: this.animal.Pets_health.check_data,
      anamnesis: this.animal.Pets_health.anamnesis
    });
  }

  patchPetMove() {
    this.petMove.patchValue({
      date_in: this.animal.Pets_move.date_in,
      act: this.animal.Pets_move.act,
      date_out: this.animal.Pets_move.date_out,
      reason: this.animal.Pets_move.reason,
      order: this.animal.Pets_move.order
    });
  }

  patchPetOwners() {
    this.petOwners.patchValue({
      legal_entity: this.animal.Pets_owners.legal_entity,
      guardian: this.animal.Pets_owners.guardian,
      individual: this.animal.Pets_owners.individual,
    });
  }

  patchPetResponsible() {
    this.petResponsible.patchValue({
      shelter: this.animal.Pets_responsible.shelter,
      person: this.animal.Pets_responsible.person,
    });
  }

  patchPetSanitation() {
    this.petSanitation.patchValue({
      order: this.animal.Pets_sanitation.order,
      date: this.animal.Pets_sanitation.date,
      medicine: this.animal.Pets_sanitation.medicine,
      dose: this.animal.Pets_sanitation.dose,
    });
  }

  patchPetVaccination() {
    this.petVaccination.patchValue({
      order: this.animal.Pets_vaccination.order,
      date: this.animal.Pets_vaccination.date,
      vaccine: this.animal.Pets_vaccination.vaccine,
      series: this.animal.Pets_vaccination.series,
    });
  }
}