import { Component, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-consumption-chart',
  standalone: true,
  imports: [NgxChartsModule],
  template: `
    <ngx-charts-line-chart
      [view]="[700, 300]"
      [scheme]="['#ef4444']"
      [results]="data"
      [xAxis]="true"
      [yAxis]="true"
      [legend]="true"
      [showXAxisLabel]="false"
      [showYAxisLabel]="true"
      yAxisLabel="кВт·ч"
      [curve]="curve"
    >
    </ngx-charts-line-chart>
  `,
  styles: []
})
export class ConsumptionChartComponent {
  @Input() data: { hour: string; consumption: number }[] = [];
  readonly curve = 'monotone';
}