import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  bloodGroups: string[] = ['O-', 'O+', 'B-', 'B+', 'A-', 'A+', 'AB-', 'AB+'];
  patientBloodGroup: string = '';
  donorBloodGroup: string = '';
  isCompatible: boolean | null = null;
  isCheckDone: boolean = false;

  constructor() {}
  checkCompatibilty() {
    if (this.patientBloodGroup === 'O-' && this.donorBloodGroup === 'O-') {
      this.isCompatible = true;
    } else if (
      this.patientBloodGroup === 'O+' &&
      (this.donorBloodGroup === 'O-' || this.donorBloodGroup === 'O+')
    ) {
      this.isCompatible = true;
    } else if (
      this.patientBloodGroup === 'B-' &&
      (this.donorBloodGroup === 'B-' || this.donorBloodGroup === 'O-')
    ) {
      this.isCompatible = true;
    } else if (
      this.patientBloodGroup === 'B+' &&
      (this.donorBloodGroup === 'B+' ||
        this.donorBloodGroup === 'B-' ||
        this.donorBloodGroup === 'O+' ||
        this.donorBloodGroup === 'O-')
    ) {
      this.isCompatible = true;
    } else if (
      this.patientBloodGroup === 'A-' &&
      (this.donorBloodGroup === 'A-' || this.donorBloodGroup === 'O-')
    ) {
      this.isCompatible = true;
    } else if (
      this.patientBloodGroup === 'A+' &&
      (this.donorBloodGroup === 'A+' ||
        this.donorBloodGroup === 'A-' ||
        this.donorBloodGroup === 'O+' ||
        this.donorBloodGroup === 'O-')
    ) {
      this.isCompatible = true;
    } else if (
      this.patientBloodGroup === 'AB-' &&
      (this.donorBloodGroup === 'AB-' ||
        this.donorBloodGroup === 'A-' ||
        this.donorBloodGroup === 'B-' ||
        this.donorBloodGroup === 'O-')
    ) {
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
      this.isCompatible = true;
    } else {
      console.log('Not Compatible 👎');
      this.isCheckDone = true;
      this.isCompatible = false;
    }
  }
}
