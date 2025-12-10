import { Injectable } from '@angular/core';
import { Device } from '../models/device.model';
import { HourlyConsumption, DailyConsumption, PieSegment } from '../models/consumption.model';
import { Alert } from '../models/alert.model';
import { Event } from '../models/event.model';

@Injectable({ providedIn: 'root' })
export class MockDataService {
  getHourlyData(): HourlyConsumption[] {
    return [
      { hour: '00:00', consumption: 12.4 },
      { hour: '02:00', consumption: 10.2 },
      { hour: '04:00', consumption: 8.1 },
      { hour: '06:00', consumption: 9.7 },
      { hour: '08:00', consumption: 14.3 },
      { hour: '10:00', consumption: 18.6 },
      { hour: '12:00', consumption: 22.1 },
      { hour: '14:00', consumption: 20.8 },
      { hour: '16:00', consumption: 19.2 },
      { hour: '18:00', consumption: 24.7 },
      { hour: '20:00', consumption: 26.5 },
      { hour: '22:00', consumption: 18.9 },
    ];
  }

  getDailyData(): DailyConsumption[] {
    return [
      { day: 'Пн', consumption: 185.2, temperature: 21.4 },
      { day: 'Вт', consumption: 178.6, temperature: 22.1 },
      { day: 'Ср', consumption: 192.3, temperature: 20.8 },
      { day: 'Чт', consumption: 204.7, temperature: 19.5 },
      { day: 'Пт', consumption: 198.9, temperature: 20.3 },
      { day: 'Сб', consumption: 165.4, temperature: 22.7 },
      { day: 'Вс', consumption: 158.2, temperature: 23.1 },
    ];
  }

  getDeviceStatus(): Device[] {
    return [
      { id: 1, name: 'Основной котел', status: 'online', temp: 65.2, battery: 92 },
      { id: 2, name: 'Радиатор 1 (Гостиная)', status: 'online', temp: 22.4, battery: 78 },
      { id: 3, name: 'Радиатор 2 (Спальня)', status: 'online', temp: 21.8, battery: 85 },
      { id: 4, name: 'Радиатор 3 (Кухня)', status: 'offline', temp: 18.2, battery: 12 },
      { id: 5, name: 'Радиатор 4 (Кабинет)', status: 'online', temp: 20.5, battery: 94 },
    ];
  }

  getPieData(): PieSegment[] {
    return [
      { name: 'Отопление', value: 68 },
      { name: 'Горячая вода', value: 22 },
      { name: 'Вентиляция', value: 10 },
    ];
  }

  getAlerts(): Alert[] {
    return [
      {
        id: 1,
        time: 'Сегодня, 10:23',
        type: 'critical',
        title: 'Критическая ошибка: Радиатор 3 (Кухня)',
        message: 'Устройство не отвечает более 30 минут. Батарея разряжена (12%).',
        actions: ['Отправить сигнал', 'Перезагрузить', 'Заменить батарею'],
      },
      {
        id: 2,
        time: 'Сегодня, 08:45',
        type: 'warning',
        title: 'Повышенное энергопотребление',
        message: 'Потребление в период с 08:00 до 09:00 превысило среднее значение на 22%.',
        actions: ['Анализ', 'Настроить график'],
      },
      {
        id: 3,
        time: 'Вчера, 19:12',
        type: 'info',
        title: 'Автоматическая оптимизация',
        message: 'Система скорректировала график отопления на основе погодных условий.',
        actions: ['Детали', 'Отменить'],
      },
      {
        id: 4,
        time: '05.12.2025, 14:30',
        type: 'critical',
        title: 'Перегрев теплоносителя',
        message: 'Температура в котле достигла 92°C. Активирована защита.',
        actions: ['Диагностика', 'Связаться со специалистом'],
      },
    ];
  }

  getEvents(): Event[] {
    return [
      { id: 1, time: '10:23', type: 'warning', message: 'Радиатор 3 (Кухня): низкий заряд батареи (12%)' },
      { id: 2, time: '09:47', type: 'info', message: 'Температура в гостиной достигла заданного значения 22°C' },
      { id: 3, time: '08:15', type: 'success', message: 'Ежедневная диагностика системы завершена успешно' },
      { id: 4, time: '07:30', type: 'info', message: 'Режим энергосбережения отключен согласно расписанию' },
    ];
  }
}