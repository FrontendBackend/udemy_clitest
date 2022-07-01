import { ChartData } from 'chart.js';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

  @Input() title: string = 'Sin titulo';

  constructor() { }

  ngOnInit(): void {
  }

    // Doughnut
    @Input('labels') doughnutChartLabels: string[] = ['label1', 'label2', 'label3'];
    @Input('data')  doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: [350, 450, 100] ,
          backgroundColor:['#9E120E','#FF5800','#FFB414']
        },
      ]
    };
}
