import { Component } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { NgIf } from '@angular/common';

import { TimeService } from './app/core/services/time.service';
import { SidebarComponent } from './app/shared/components/sidebar/sidebar.component';
import { DashboardComponent } from './app/features/dashboard/dashboard.component';
import { ConsumptionComponent } from './app/features/consumplion/consumption.component';
import { DevicesComponent } from './app/features/devices/devices.component';
import { AlertsComponent } from './app/features/alerts/alerts.component';
import { SettingsComponent } from './app/features/settings/settings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIconComponent,
    NgIf,
    SidebarComponent,
    DashboardComponent,
    ConsumptionComponent,
    DevicesComponent,
    AlertsComponent,
    SettingsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sidebarOpen = false;
  activeTab: 'dashboard' | 'consumption' | 'devices' | 'alerts' | 'settings' = 'dashboard';
  currentTime = new Date();

  constructor(private timeService: TimeService) {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  onTabChange(tab: string): void {
    this.activeTab = tab as any;
  }

  getTabTitle(): string {
    const titles: Record<string, string> = {
      dashboard: 'Панель управления',
      consumption: 'Анализ потребления',
      devices: 'Устройства системы',
      alerts: 'Оповещения и события',
      settings: 'Настройки системы'
    };
    return titles[this.activeTab] || '';
  }

  formatTime(date: Date): string {
    return this.timeService.formatTime(date);
  }

  formatDate(date: Date): string {
    return this.timeService.formatDate(date);
  }
}