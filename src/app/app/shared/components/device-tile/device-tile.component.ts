import { Component, Input } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { Device } from '../../../core/models/device.model';

@Component({
  selector: 'app-device-tile',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './device-tile.component.html',
  styleUrls: ['./device-tile.component.css']
})
export class DeviceTileComponent {
  @Input() device!: Device;

  getBatteryColor(): string {
    if (this.device.battery > 50) return 'bg-green-500';
    if (this.device.battery > 20) return 'bg-yellow-500';
    return 'bg-red-500';
  }

  getStatusClass(): string {
    return this.device.status === 'online'
      ? 'bg-green-100 text-green-800'
      : 'bg-red-100 text-red-800';
  }
}