import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { BloodDroploadingComponent } from '../blood-droploading/blood-droploading.component';
@Component({
  selector: 'result',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose,BloodDroploadingComponent],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css',
})
export class ResultComponent implements OnInit{
  isLoding:boolean=false
  @Input() CheckDone: boolean = false;
  @Input() Compatible: boolean | null = null;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {
      this.CheckDone = data.CheckDone;
      this.Compatible = data.Compatible;
    }
  }
  ngOnInit(): void {
    this.loading()
  }
  loading(){
      setTimeout(() => {
    this.isLoding=true
    console.log(this.isLoding);
    
  }, 2000);
  }

}
