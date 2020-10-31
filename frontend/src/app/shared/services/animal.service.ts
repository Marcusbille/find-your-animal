import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet_main } from '../models/pet_main.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  apiUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllPets(): Observable<Pet_main[]> {
    return this.http.get<Pet_main[]>(`${this.apiUrl}/api/pets`);
  }

}
