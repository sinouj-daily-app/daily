import { ApolloService } from './ApolloService.ts';
import { DocumentNode } from '@apollo/client';

export class ApiService {
  apolloService = new ApolloService();

  public get(CONST_QUERY: DocumentNode) {
    return this.apolloService.query(CONST_QUERY);
  }
}
