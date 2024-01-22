import { Component, Input } from '@angular/core';

@Component({
  selector: 'result',
  standalone: true,
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {

  @Input() CheckDone:boolean=false;
  @Input() Compatible:boolean | null = null
  constructor(){}
}
