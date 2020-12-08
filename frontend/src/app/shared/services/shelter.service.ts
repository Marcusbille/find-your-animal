import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ShelterService {

  apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getShelters(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/shelters`).pipe(catchError(this.handleError));
  }

  getOneShelter(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/shelters/${id}`).pipe(catchError(this.handleError));
  }

  getPetsByShelter(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/pets/shelterwithpets/${id}`);
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
