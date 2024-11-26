import { ApiService } from '@daily/shared/services';
import { TASKS } from 'src/shared/queries/TaskQuery';

export class HomeService {
  public getTasks = async () => {
    return this.apiService.get(TASKS);
  };

  constructor(private apiService: ApiService) {}
}
