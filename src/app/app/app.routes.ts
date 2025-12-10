import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './features/settings/settings.component';
import { AlertsComponent } from './features/alerts/alerts.component';
import { DevicesComponent } from './features/devices/devices.component';
import { ConsumptionComponent } from './features/consumplion/consumption.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'consumption', component: ConsumptionComponent },
  { path: 'devices', component: DevicesComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }