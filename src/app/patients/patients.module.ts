import { PatientService } from './services/patient.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';


@NgModule({
  declarations: [
    PatientDetailsComponent,
    PatientListComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
  ],
  exports:[PatientsRoutingModule,
    PatientListComponent],
    entryComponents:[PatientListComponent],
})
export class PatientsModule { }
