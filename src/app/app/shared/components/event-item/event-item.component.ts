import { Component, Input } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { Event, EventType } from '../../../core/models/event.model';

@Component({
  selector: 'app-event-item',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent {
  @Input() event!: Event;

  getDotColor(): string {
    return this.event.type === 'warning' ? 'bg-yellow-500' :
           this.event.type === 'success' ? 'bg-green-500' : 'bg-blue-500';
  }
}