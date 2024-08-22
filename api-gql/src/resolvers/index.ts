import * as task from './tasks/task.resolver';
import * as user from './users/user.resolver';

export const resolvers = [
    task.resolver,
    user.resolver
];