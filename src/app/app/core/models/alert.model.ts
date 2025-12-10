export type AlertType = 'critical' | 'warning' | 'info';

export interface Alert {
  id: number;
  time: string;
  type: AlertType;
  title: string;
  message: string;
  actions: string[];
}