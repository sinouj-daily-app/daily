import {ApiService} from "@daily/shared/services"
import {gql} from "@apollo/client";

export class HomeService {
    public getTasks = async () => {
        return this.apiService.get(gql`
            query Tasks {
              tasks {
                author
                description
                id
                title
              }
            }`
        )
    }

    constructor(private apiService: ApiService) {
    }
}