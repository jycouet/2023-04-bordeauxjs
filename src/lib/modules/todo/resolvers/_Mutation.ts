import type { Todo } from '$graphql/$kitql/graphqlTypes';
import { GraphQLError } from 'graphql';
import type { TodoModule } from '../$kitql/moduleTypes';
import { todos } from '../providers/dbTodo';

export const resolvers: TodoModule.Resolvers = {
	Mutation: {
		todoCreate: async (root, args, ctx) => {
			const todo: Todo = {
				id: crypto.randomUUID(),
				updatedAt: new Date(),
				title: args.fields.title,
				createdById: '7',
				done: false
			};
			todos.push(todo);
			return todo;
		},
		todoUpdate: async (root, args, ctx) => {
			const todo = todos.find((todo) => todo.id === args.id);
			if (!todo) {
				throw new GraphQLError('Todo not found');
			}
			if (args.fields.title) {
				todo.title = args.fields.title;
			}
			if (args.fields.done !== undefined) {
				todo.done = args.fields.done;
			}
			todo.updatedAt = new Date();
			todo.createdById = '7';
			return todo;
		}
	}
};
