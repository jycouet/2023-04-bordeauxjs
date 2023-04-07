import { users } from '$modules/user/providers/dbUser';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	return json(users);
};
