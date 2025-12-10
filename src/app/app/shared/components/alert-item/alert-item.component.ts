import { Component, Input } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { CommonModule, NgClass } from '@angular/common';
import { Alert, AlertType } from '../../../core/models/alert.model';

@Component({
  selector: 'app-alert-item',
  standalone: true,
  imports: [NgIconComponent, NgClass, CommonModule],
  templateUrl: './alert-item.component.html',
  styleUrls: ['./alert-item.component.css']
})
export class AlertItemComponent {
  @Input() alert!: Alert;

  getTypeClass(): string {
    return this.alert.type === 'critical' ? 'critical' :
           this.alert.type === 'warning' ? 'warning' : 'info';
  }

  getBadgeClass(): string {
    return this.alert.type === 'critical' ? 'bg-red-200 text-red-800' :
           this.alert.type === 'warning' ? 'bg-yellow-200 text-yellow-800' :
           'bg-blue-200 text-blue-800';
  }

  getBadgeText(): string {
    return this.alert.type === 'critical' ? 'КРИТИЧЕСКАЯ' :
           this.alert.type === 'warning' ? 'ПРЕДУПРЕЖДЕНИЕ' :
           'ИНФОРМАЦИЯ';
  }
}