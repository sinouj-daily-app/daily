import {ApiService} from "@daily/shared/services"

export class HomeService {
    public getTasks = async () => {
        return this.apiService.get("")
    }

    constructor(private apiService: ApiService) {
    }
}