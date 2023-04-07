import { todos } from '$modules/todo/providers/dbTodo';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { users } from '$modules/user/providers/dbUser';

export const GET: RequestHandler = async () => {
	const result = todos.map((c) => {
		return { id: c.id, title: c.title, createdBy: users.find((c) => c.id === c.id) };
	});

	return json(result);
};
