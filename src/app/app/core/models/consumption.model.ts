export interface HourlyConsumption {
  hour: string;
  consumption: number;
}

export interface DailyConsumption {
  day: string;
  consumption: number;
  temperature: number;
}

export interface PieSegment {
  name: string;
  value: number;
}