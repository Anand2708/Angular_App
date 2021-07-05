import { Patient } from './../model/patient';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patientURL = 'http://localhost:6600/api/patient/GetPatientDetails';

  constructor(private http: HttpClient) { }

  getPatient(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientURL)
      .pipe(
        tap(data => console.log('Patients : ', JSON.stringify(data))),
        catchError(err => {
          console.error(err);
          return throwError(err);
        })
      );

  }
}
