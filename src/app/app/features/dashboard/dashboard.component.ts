import { Component, OnInit } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { NgFor, NgIf } from '@angular/common';

import { StatCardComponent } from '../../shared/components/stat-card/stat-card.component';
import { DeviceCardComponent } from '../../shared/components/device-card/device-card.component';
import { EventItemComponent } from '../../shared/components/event-item/event-item.component';

import { MockDataService } from '../../core/services/mock-data.service';
import { Device } from '../../core/models/device.model';
import { HourlyConsumption, PieSegment } from '../../core/models/consumption.model';
import { Event as AppEvent } from '../../core/models/event.model';
import { ChartSeries } from '../../core/models/chart.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgIconComponent,
    NgxChartsModule,
    NgFor, NgIf,
    StatCardComponent,
    DeviceCardComponent,
    EventItemComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  hourlyData: HourlyConsumption[] = [];
  deviceStatus: Device[] = [];
  pieData: PieSegment[] = [];
  events: AppEvent[] = [];
  hourlyChartData: ChartSeries[] = [];

  colorScheme: Color = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#EF4444', '#F59E0B', '#10B981']
  };

  constructor(private mockData: MockDataService) {}

  ngOnInit(): void {
    // this.hourlyData = this.mockData.getHourlyData();
    this.deviceStatus = this.mockData.getDeviceStatus();
    this.pieData = this.mockData.getPieData();
    this.events = this.mockData.getEvents();
    const data = this.mockData.getHourlyData();
    this.hourlyData  = data;
    console.log('hourlyChartData', this.hourlyChartData);
    this.hourlyChartData = [
      {
        name: 'Потребление',
        series: this.mockData.getHourlyData().map(d => ({
          name: d.hour,
          value: d.consumption
        }))
      }
    ];
  }

  getOnlineCount(): number {
    return this.deviceStatus.filter(d => d.status === 'online').length;
  }
}