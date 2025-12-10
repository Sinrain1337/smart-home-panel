import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgIconComponent, NgFor, NgClass],
  template: `
    <aside 
      class="bg-gray-900 text-white w-64 flex flex-col"
      [class.hidden]="!open()"
      class="md:block">
      <div class="p-6 border-b border-gray-800">
        <h1 class="text-2xl font-bold flex items-center">
          <ng-icon name="lucideFlame" class="mr-2 text-red-500" size="24" />
          Умный Дом
        </h1>
        <p class="text-gray-400 text-sm mt-1">Мониторинг тепловой энергии</p>
      </div>
      <nav class="flex-1 p-4">
        <ul class="space-y-2">
          @for (item of items; track item.id) {
            <li (click)="onTabClick(item.id)" class="cursor-pointer hover:translate-x-1">
              <div 
                class="w-full flex items-center px-4 py-3 rounded-lg transition-colors"
                [class.bg-red-600.text-white]="activeTab() === item.id"
                [class.text-gray-300.hover:bg-gray-800]="activeTab() !== item.id">
                <ng-icon [name]="item.icon" size="20" class="mr-3" />
                {{ item.label }}
              </div>
            </li>
          }
        </ul>
      </nav>
      <div class="p-4 border-t border-gray-800">
        <div class="flex items-center">
          <div class="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
            <ng-icon name="lucideUsers" size="20" class="text-white" />
          </div>
          <div class="ml-3">
            <p class="font-medium">Администратор</p>
            <p class="text-gray-400 text-sm">admin@smarthome.ru</p>
          </div>
        </div>
      </div>
    </aside>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class SidebarComponent {
  @Input() open = signal(false);
  @Input() activeTab = signal('dashboard');
  @Output() toggle = new EventEmitter<boolean>();
  @Output() activeTabChange = new EventEmitter<string>();

  items = [
    { id: 'dashboard', label: 'Панель управления', icon: 'lucideHome' },
    { id: 'consumption', label: 'Потребление', icon: 'lucideFlame' },
    { id: 'devices', label: 'Устройства', icon: 'lucideWifi' },
    { id: 'alerts', label: 'Оповещения', icon: 'lucideAlertCircle' },
    { id: 'settings', label: 'Настройки', icon: 'lucideSettings' }
  ];

  onTabClick(id: string): void {
    this.activeTab.set(id);
    this.activeTabChange.emit(id);
    if (window.innerWidth < 768) this.toggle.emit(false);
  }
}