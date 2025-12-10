export interface Device {
  id: number;
  name: string;
  status: 'online' | 'offline';
  temp: number;
  battery: number;
}