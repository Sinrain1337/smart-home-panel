import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { CommonModule, NgClass } from '@angular/common';

export interface NavItem {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgIconComponent, NgClass, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() sidebarOpen = false;
  @Input() activeTab = '';
  @Output() tabChange = new EventEmitter<string>();
  @Output() toggleSidebar = new EventEmitter<void>();

  navItems: NavItem[] = [
    { id: 'dashboard', label: 'Панель управления', icon: 'lucideHome' },
    { id: 'consumption', label: 'Потребление', icon: 'lucideFlame' },
    { id: 'devices', label: 'Устройства', icon: 'lucideWifi' },
    { id: 'alerts', label: 'Оповещения', icon: 'lucideAlertCircle' },
    { id: 'settings', label: 'Настройки', icon: 'lucideSettings' }
  ];

  onTabClick(id: string): void {
    this.tabChange.emit(id);
    if (window.innerWidth < 768) {
      this.toggleSidebar.emit();
    }
  }
}