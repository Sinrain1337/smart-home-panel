import { Component, OnInit } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { NgFor } from '@angular/common';

import { MockDataService } from '../../core/services/mock-data.service';
import { DailyConsumption } from '../../core/models/consumption.model';

@Component({
  selector: 'app-consumption',
  standalone: true,
  imports: [NgIconComponent, NgxChartsModule, NgFor],
  templateUrl: './consumption.component.html',
  styleUrls: ['./consumption.component.css']
})
export class ConsumptionComponent implements OnInit {

  dailyData: DailyConsumption[] = [];

  // 👉 формат для bar-vertical с легендой
  dailyChartData: { name: string; value: number }[] = [];

  // Цветовая схема — полностью корректная
  colorScheme: Color = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#EF4444', '#F59E0B', '#10B981']
  };

  constructor(private mockData: MockDataService) {}

  ngOnInit(): void {
    // Получаем исходные данные
    this.dailyData = this.mockData.getDailyData();

    // 👉 Формат для bar-vertical:
    // [{ name: 'Пн', value: 185.2 }, ...]
    this.dailyChartData = this.dailyData.map(d => ({
      name: d.day,
      value: Number(d.consumption) // на всякий случай — приведение к числу
    }));

    console.log('dailyChartData:', this.dailyChartData);
  }
}
