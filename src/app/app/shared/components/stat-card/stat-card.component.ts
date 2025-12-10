import { Component, Input } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [NgIconComponent, NgIf],
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.css']
})
export class StatCardComponent {
  @Input() title!: string;
  @Input() value!: string | number;
  @Input() unit!: string;
  @Input() icon!: string;
  @Input() trend?: 'up' | 'down';
  @Input() trendValue?: string;
}