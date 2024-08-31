import { InMemoryCacheConfig } from '@apollo/client';

export type Apollo = {
  uri: string;
  cache: InMemoryCacheConfig;
};
