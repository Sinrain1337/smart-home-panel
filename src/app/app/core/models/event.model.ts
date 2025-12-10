export type EventType = 'warning' | 'success' | 'info';

export interface Event {
  id: number;
  time: string;
  type: EventType;
  message: string;
}