import { Component, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [NgxChartsModule],
  template: `
    <ngx-charts-pie-chart
      [view]="[400, 300]"
      [scheme]="['#EF4444', '#F59E0B', '#10B981']"
      [results]="data"
      [labels]="true"
      [doughnut]="true"
    ></ngx-charts-pie-chart>
  `,
  styles: []
})
export class PieChartComponent {
  @Input() data: { name: string; value: number }[] = [];
}