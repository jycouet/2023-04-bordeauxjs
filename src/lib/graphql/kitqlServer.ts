import { useKitqlModules, type KitQLHandleGraphQL } from '@kitql/all-in';
import type { RequestEvent } from '@sveltejs/kit';
import { modules } from './$kitql/_appModules';
import type { User } from './$kitql/graphqlTypes';

const plugins = [];
plugins.push(useKitqlModules(modules));

export type IKitQLContext = ReturnType<typeof getContext>;
function getContext({ request }: RequestEvent) {
	// get the cookie or the token...
	const coolInfo = request.headers.get('Authorization');

	// get the user from the coolInfo (redis or db or ...)
	const user: User = { id: '7', username: 'JYC' };

	return {
		request,
		user
	};
}

export const kitqlServer: KitQLHandleGraphQL<IKitQLContext, RequestEvent> = {
	plugins,
	context: getContext
};
