import {ApiService} from "@daily/shared/services"
import {gql} from "@apollo/client";

export class HomeService {
    public getTasks = async () => {
        return this.apiService.get(gql`
            query Users {
              users {
                id
                name
              }
            }`
        )
    }

    constructor(private apiService: ApiService) {
    }
}