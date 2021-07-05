import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Patient } from '../../model/patient';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {


  pageTitle: string;
  patientList$: Observable<Patient[]>;
  errorMessage = '';

  constructor(private patientService: PatientService) {

  }

  ngOnInit(): void {
    this.pageTitle = "Patient Details"
    this.getPatientList();
  }

  getPatientList() {
    this.patientList$ = this.patientService.getPatient()
      .pipe(
        catchError(err => {
          this.errorMessage = JSON.stringify(err);
          return EMPTY;
        })
      );

  }
  onAdd() {
    console.log('Add new patient');
  }
}
