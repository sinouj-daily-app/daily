import dayjs from 'dayjs';

export class DateService {
  private sanitizeDate(date: dayjs.Dayjs): string {
    return dayjs(date).format('DD-MM-YYYY');
  }

  public getTodaysDate(): string {
    return this.sanitizeDate(dayjs());
  }
}
