import { connectionFromArray } from '$graphql/helpers/util.mjs';
import { todos } from '$modules/todo/providers/dbTodo';
import type { UserModule } from '../$kitql/moduleTypes';
import { users } from '../providers/dbUser';

export const resolvers: UserModule.Resolvers = {
	User: {
		todoConnection: async (root, args, ctx, info) => {
			const arr = todos.filter((c) => c.createdById === root.id);
			return { ...connectionFromArray(arr, args), totalCount: arr.length };
		}
	}
};
