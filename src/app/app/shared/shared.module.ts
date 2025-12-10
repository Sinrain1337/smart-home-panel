import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';

// Components
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { DeviceCardComponent } from './components/device-card/device-card.component';
import { DeviceTileComponent } from './components/device-tile/device-tile.component';
import { AlertItemComponent } from './components/alert-item/alert-item.component';
import { EventItemComponent } from './components/event-item/event-item.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    StatCardComponent,
    DeviceCardComponent,
    DeviceTileComponent,
    AlertItemComponent,
    EventItemComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    NgIconComponent
  ],
  exports: [
    StatCardComponent,
    DeviceCardComponent,
    DeviceTileComponent,
    AlertItemComponent,
    EventItemComponent,
    SidebarComponent,
    NgIconComponent
  ]
})
export class SharedModule { }