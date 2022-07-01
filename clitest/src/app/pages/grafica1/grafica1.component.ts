import { Component } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = ['Pan', 'Refresco', 'tacos'];
  public data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      {
        data: [10, 15, 40],
        backgroundColor:['#9E120E','#FF5800','#FFB414']
      },
    ]
  };

}
