import { Component, OnInit } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { NgFor } from '@angular/common';

import { DeviceTileComponent } from '../../shared/components/device-tile/device-tile.component';
import { MockDataService } from '../../core/services/mock-data.service';
import { Device } from '../../core/models/device.model';

@Component({
  selector: 'app-devices',
  standalone: true,
  imports: [NgIconComponent, NgFor, DeviceTileComponent],
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  deviceStatus: Device[] = [];

  constructor(private mockData: MockDataService) {}

  ngOnInit(): void {
    this.deviceStatus = this.mockData.getDeviceStatus();
  }
}