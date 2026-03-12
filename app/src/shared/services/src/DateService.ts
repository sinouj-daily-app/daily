import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export class DateService {
  constructor() {
    dayjs.extend(relativeTime);
  }

  private sanitizeDate(date: string): string {
    return dayjs(date).format('DD-MM-YYYY');
  }

  getRelativeDate(date: string): string {
    return dayjs(+date).fromNow().toString();
  }

  public getTodaysDate(): string {
    return this.sanitizeDate(dayjs().toString());
  }
}
