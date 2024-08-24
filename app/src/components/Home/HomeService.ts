import {ApiService} from "@daily/shared/services"

export class HomeService {
    public getTasks = async () => {
        return await this.apiService.get('tasks', 'populate=*')
    }

    constructor(private apiService: ApiService) {
    }
}