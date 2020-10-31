import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  apiUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllPets(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/pets`).pipe(catchError(this.handleError));
  }

  getOnePet(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/pets/${id}`).pipe(catchError(this.handleError));
  }

  getPetHealth(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/pets/health/${id}`).pipe(catchError(this.handleError));
  }

  getPetVaccination(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/pets/vaccination/${id}`).pipe(catchError(this.handleError));
  }

  getPetSanitation(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/pets/sanitation/${id}`).pipe(catchError(this.handleError));
  }

  getPetOwner(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/pets/owner/${id}`).pipe(catchError(this.handleError));
  }

  postPet(data) {
    return this.http.post(`${this.apiUrl}/api/pets`, data).pipe(catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
