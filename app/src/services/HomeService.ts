import {ApiService} from "../shared/services/ApiService.ts";

export class HomeService {
    public getTasks = async () => {
        return await this.apiService.get('tasks')
    }
    
    constructor(private apiService: ApiService) {}
}