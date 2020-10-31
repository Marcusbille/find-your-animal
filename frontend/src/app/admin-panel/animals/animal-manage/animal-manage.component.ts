import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Destroyer } from 'src/app/shared/destroyer';
import { AnimalService } from 'src/app/shared/services/animal.service';
import { DictionaryService } from 'src/app/shared/services/dictionary.service';
import { ShelterService } from 'src/app/shared/services/shelter.service';



@Component({
  selector: 'app-animal-manage',
  templateUrl: './animal-manage.component.html',
  styleUrls: ['./animal-manage.component.scss']
})
export class AnimalManageComponent extends Destroyer implements OnInit, OnDestroy {

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
  dictionary: any;
  breeds = [];
  hair_colors = [];
  hair_types = [];
  ear_types = [];
  tail_types = [];
  sizes = ['маленький', 'средний', 'крупный', 'очень крупный'];
  move_types = [];
  shelters = [];
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private animalService: AnimalService,
    private dictionaryService: DictionaryService, private shelterService: ShelterService) {
    super();
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
    this.shelterService.getShelters().pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.shelters = data;
    })
    this.dictionaryService.getDictionary().pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.dictionary = data;
      this.dictionary.forEach(item => {
        if (item.list == 'cat_breeds' || item.list == 'dog_breeds')
          this.breeds.push(item);
        if (item.list == 'cat_colors' || item.list == 'dog_colors')
          this.hair_colors.push(item);
        if (item.list == 'cat_hair_types' || item.list == 'dog_hair_types')
          this.hair_types.push(item);
        if (item.list == 'ear_types')
          this.ear_types.push(item);
        if (item.list == 'tail_types')
          this.tail_types.push(item);
        if (item.list == 'move_types')
          this.move_types.push(item);
      });
      if (this.curId) {
        this.animal = this.route.snapshot.data.animal;
        this.patchPetMain();
        this.patchPetAdditional();
        this.patchPetCatchInfo();
        this.patchPetMove();
        this.patchPetResponsible();
        if (this.animal.species == 'собака')
          this.refreshDictionary('собака');
        else
          this.refreshDictionary('кошка');
        // this.animalService.getPetHealth(this.curId).subscribe(data => {
        //   if (data)
        //     this.patchPetHealth(data);
        // });
        // this.animalService.getPetOwner(this.curId).subscribe(data => {
        //   if (data)
        //     this.patchPetOwners(data);
        // });
        // this.animalService.getPetSanitation(this.curId).subscribe(data => {
        //   if (data)
        //     this.patchPetSanitation(data);
        // });
        // this.animalService.getPetVaccination(this.curId).subscribe(data => {
        //   if (data)
        //     this.patchPetVaccination(data);
        // });
      }
    });
  }

  speciesChanged(event: any) {
    if (event.value == 'собака') {
      this.refreshDictionary('собака');
    } else {
      this.refreshDictionary('кошка');
    }
  }

  refreshDictionary(value: string) {
    if (value == 'собака') {
      this.breeds = this.dictionary.filter(item => item.list == 'dog_breeds');
      this.hair_colors = this.dictionary.filter(item => item.list == 'dog_colors');
      this.hair_types = this.dictionary.filter(item => item.list == 'dog_hair_types');
    } else {
      this.breeds = this.dictionary.filter(item => item.list == 'cat_breeds');
      this.hair_colors = this.dictionary.filter(item => item.list == 'cat_colors');
      this.hair_types = this.dictionary.filter(item => item.list == 'cat_hair_types');
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
      "order_date": ["", [Validators.required]],
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
        breed: this.animal.breed,
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
        order_date: this.animal.Pets_catch_info.order_date,
        district: this.animal.Pets_catch_info.district,
        catch_report: this.animal.Pets_catch_info.catch_report,
        catch_address: this.animal.Pets_catch_info.catch_address
      });
  }

  patchPetHealth(data: any) {
    this.petHealth.patchValue({
      check_data: data.check_data,
      anamnesis: data.anamnesis
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

  patchPetOwners(data: any) {
    this.petOwners.patchValue({
      legal_entity: data.legal_entity,
      guardian: data.guardian,
      individual: data.individual,
    });
  }

  patchPetResponsible() {
    this.petResponsible.patchValue({
      // shelter: this.animal.shelter_id,
      person: this.animal.Pets_responsible.person,
    });
  }

  patchPetSanitation(data: any) {
    this.petSanitation.patchValue({
      order: data.order,
      date: data.date,
      medicine: data.medicine,
      dose: data.dose,
    });
  }

  patchPetVaccination(data: any) {
    this.petVaccination.patchValue({
      order: data.order,
      date: data.date,
      vaccine: data.vaccine,
      series: data.series,
    });
  }

  createPet() {
    let main = this.petMain.value;
    main.shelter_id = this.petResponsible.get('shelter').value;
    let additional = this.petAdditional.value;
    let catch_info = this.petCatchInfo.value;
    let move = this.petMove.value;
    let responsible = this.petResponsible.value;

    this.animalService.postPet_main(main).subscribe(data => {
      console.log(data);
      let pet_id = data['id'];
      this.animalService.postPet_additional(additional, pet_id).subscribe(res => {
        console.log(res);
        this.animalService.postPet_catch_info(catch_info, pet_id).subscribe(res => {
          console.log(res);
          this.animalService.postPet_move(move, pet_id).subscribe(res => {
            console.log(res);
            this.animalService.postPet_responsible(responsible, pet_id).subscribe(res => {
              console.log(res);
            })
          })
        })
      })
    })


  }

}