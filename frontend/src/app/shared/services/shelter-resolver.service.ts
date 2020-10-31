import { Injectable } from '@angular/core';

import { ShelterService } from './shelter.service';


@Injectable({
  providedIn: 'root'
})
export class ShelterResolverService {

  constructor(private sheltersService: ShelterService) { }

}
