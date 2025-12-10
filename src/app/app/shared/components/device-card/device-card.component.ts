import { Component, Input } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { Device } from '../../../core/models/device.model';

@Component({
  selector: 'app-device-card',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.css']
})
export class DeviceCardComponent {
  @Input() device!: Device;

  getIconColor(): string {
    return this.device.status === 'online' ? 'text-green-600' : 'text-red-600';
  }

  getBgColor(): string {
    return this.device.status === 'online' ? 'bg-green-100' : 'bg-red-100';
  }

  getStatusClass(): string {
    return this.device.status === 'online'
      ? 'bg-green-100 text-green-800'
      : 'bg-red-100 text-red-800';
  }
}