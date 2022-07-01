import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  @Output() progreso1: number = 25;
  @Output() progreso2: number = 35;

  get obtenerProgreso1() {
    return `${this.progreso1}%`
  }

  get obtenerProgreso2() {
    return `${this.progreso2}%`
  }
}
