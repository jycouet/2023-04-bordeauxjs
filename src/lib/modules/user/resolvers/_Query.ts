import { connectionFromArray } from '$graphql/helpers/util.mjs';
import type { UserModule } from '../$kitql/moduleTypes';
import { users } from '../providers/dbUser';

export const resolvers: UserModule.Resolvers = {
	Query: {
		user: async (root, args, ctx) => {
			const usersFound = users.filter((c) => c.id === args.id);
			if (usersFound.length > 0) {
				return usersFound[0];
			}
			return null;
		},
		userConnection: async (root, args, ctx, info) => {
			return { ...connectionFromArray(users, args), totalCount: users.length };
		}
	}
};
