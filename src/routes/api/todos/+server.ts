import { todos } from '$modules/todo/providers/dbTodo';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	return json(todos);
};
