import { Patient } from './../model/patient';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CommonService } from 'src/app/shared/services/common.service';


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patientURL = 'patient/GetPatientDetails';

  constructor(private commonService: CommonService) { }

  // getPatient(): Observable<Patient[]> {
  //   return this.http.get<Patient[]>(this.patientURL)
  //     .pipe(
  //       tap(data => console.log('Patients : ', JSON.stringify(data))),
  //       catchError(err => {
  //         console.error(err);
  //         return throwError(err);
  //       })
  //     );

  // }

  getPatient() {
    // if (this.patients) {
    //   return of(this.patients)
    // }
    return this.commonService.GetService(this.patientURL, true).pipe(
      map(patients => {
        return patients;
      })
    );
  }
}
