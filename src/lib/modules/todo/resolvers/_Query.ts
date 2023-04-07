import { connectionFromArray } from '$graphql/helpers/util.mjs';
import type { TodoModule } from '../$kitql/moduleTypes';
import { todos } from '../providers/dbTodo';

export const resolvers: TodoModule.Resolvers = {
	Query: {
		todo: async (root, args, ctx) => {
			const todosFound = todos.filter((c) => c.id === args.id);
			if (todosFound.length > 0) {
				return todosFound[0];
			}
			return null;
		},

		todoConnection: async (root, args, ctx, info) => {
			return { ...connectionFromArray(todos, args), totalCount: todos.length };
		}
	}
};
