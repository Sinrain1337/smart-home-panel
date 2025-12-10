export interface ChartPoint {
  name: string;
  value: number;
}

export interface ChartSeries {
  name: string;
  series: ChartPoint[];
}
