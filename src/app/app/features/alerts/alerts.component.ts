import { Component, OnInit } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { NgFor, NgClass } from '@angular/common';

import { AlertItemComponent } from '../../shared/components/alert-item/alert-item.component';
import { MockDataService } from '../../core/services/mock-data.service';
import { Alert } from '../../core/models/alert.model';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [NgIconComponent, NgFor, NgClass, AlertItemComponent],
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  alerts: Alert[] = [];

  constructor(private mockData: MockDataService) {}

  ngOnInit(): void {
    this.alerts = this.mockData.getAlerts();
  }
  historyData = [
  { date: '09.12.2025', count: 7 },
  { date: '08.12.2025', count: 12 },
  { date: '07.12.2025', count: 5 },
  { date: '06.12.2025', count: 9 },
  { date: '05.12.2025', count: 4 }
];
}