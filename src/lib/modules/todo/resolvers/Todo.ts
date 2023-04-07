import { connectionFromArray } from '$graphql/helpers/util.mjs';
import { users } from '$modules/user/providers/dbUser';
import type { TodoModule } from '../$kitql/moduleTypes';
import { todos } from '../providers/dbTodo';

export const resolvers: TodoModule.Resolvers = {
	Todo: {
		createdBy: async (root, args, ctx) => {
			const usersFound = users.filter((c) => c.id === root.createdById);
			if (usersFound.length > 0) {
				return usersFound[0];
			}
			return null;
		}
	}
};
