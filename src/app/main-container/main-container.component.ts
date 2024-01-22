import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResultComponent } from '../result/result.component';

@Component({
  selector: 'main-container',
  standalone: true,
  imports: [CommonModule,FormsModule,ResultComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css'
})
export class MainContainerComponent {
  bloodGroups: string[] = ['O-', 'O+', 'B-', 'B+', 'A-', 'A+', 'AB-', 'AB+'];
  patientBloodGroup: string = '';
  donorBloodGroup: string = '';
  isCompatible: boolean | null = null;
  isCheckDone: boolean = false;

  constructor() {}
  checkCompatibility() {
    if (this.patientBloodGroup === 'O-' && this.donorBloodGroup === 'O-') {
      this.isCheckDone = true;
      this.isCompatible = true;
    } else if (
      this.patientBloodGroup === 'O+' &&
      (this.donorBloodGroup === 'O-' || this.donorBloodGroup === 'O+')
    ) {
      this.isCheckDone = true;
      this.isCompatible = true;
    } else if (
      this.patientBloodGroup === 'B-' &&
      (this.donorBloodGroup === 'B-' || this.donorBloodGroup === 'O-')
    ) {
      this.isCheckDone = true;
      this.isCompatible = true;
    } else if (
      this.patientBloodGroup === 'B+' &&
      (this.donorBloodGroup === 'B+' ||
        this.donorBloodGroup === 'B-' ||
        this.donorBloodGroup === 'O+' ||
        this.donorBloodGroup === 'O-')
    ) {
      this.isCheckDone = true;
      this.isCompatible = true;
    } else if (
      this.patientBloodGroup === 'A-' &&
      (this.donorBloodGroup === 'A-' || this.donorBloodGroup === 'O-')
    ) {
      this.isCheckDone = true;
      this.isCompatible = true;
    } else if (
      this.patientBloodGroup === 'A+' &&
      (this.donorBloodGroup === 'A+' ||
        this.donorBloodGroup === 'A-' ||
        this.donorBloodGroup === 'O+' ||
        this.donorBloodGroup === 'O-')
    ) {
      this.isCheckDone = true;
      this.isCompatible = true;
    } else if (
      this.patientBloodGroup === 'AB-' &&
      (this.donorBloodGroup === 'AB-' ||
        this.donorBloodGroup === 'A-' ||
        this.donorBloodGroup === 'B-' ||
        this.donorBloodGroup === 'O-')
    ) {
      this.isCheckDone = true;
      this.isCompatible = true;
    } else if (
      this.patientBloodGroup === 'AB+' &&
      (this.donorBloodGroup === 'AB+' ||
        this.donorBloodGroup === 'AB-' ||
        this.donorBloodGroup === 'A+' ||
        this.donorBloodGroup === 'A-' ||
        this.donorBloodGroup === 'B+' ||
        this.donorBloodGroup === 'B-' ||
        this.donorBloodGroup === 'O+' ||
        this.donorBloodGroup === 'O-')
    ) {
      this.isCheckDone = true;
      this.isCompatible = true;
    } else {
      this.isCheckDone = true;
      this.isCompatible = false;
    }
  }
}
