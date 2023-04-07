import type { Todo } from '$graphql/$kitql/graphqlTypes';

export const todos: Todo[] = [
	{
		id: '1',
		title: '📣 La presentation',
		done: true,
		updatedAt: new Date('2023-04-04T19:10:00.000Z'),
		createdById: '7'
	},
	{
		id: '2',
		title: 'La demo se lance 🤓!',
		done: true,
		updatedAt: new Date('2023-04-04T19:15:00.000Z'),
		createdById: '7'
	},
	{
		id: '3',
		title: 'Graph i QL',
		done: false,
		updatedAt: new Date('2023-04-04T19:15:00.000Z'),
		createdById: '7'
	},
	{
		id: '4',
		title: 'Les todos JSON.stringify...',
		done: false,
		updatedAt: new Date('2023-04-04T19:15:00.000Z'),
		createdById: '7'
	},
	{
		id: '5',
		title: 'SSR / CSR',
		done: false,
		updatedAt: new Date('2023-04-04T19:15:00.000Z'),
		createdById: '7'
	},
	{
		id: '6',
		title: 'Les Fragments',
		done: false,
		updatedAt: new Date('2023-04-04T19:15:00.000Z'),
		createdById: '2'
	},
	{
		id: '7',
		title: 'Mutation (Update)',
		done: false,
		updatedAt: new Date('2023-04-04T19:15:00.000Z'),
		createdById: '7'
	},
	{
		id: '8',
		title: 'Mutation (Create)',
		done: false,
		updatedAt: new Date('2023-04-04T19:15:00.000Z'),
		createdById: '7'
	},
	{
		id: '9',
		title: '@list & _insert',
		done: false,
		updatedAt: new Date('2023-04-04T19:15:00.000Z'),
		createdById: '7'
	},
	{
		id: '10',
		title: 'SCALAR & frag refresh',
		done: false,
		updatedAt: new Date('2023-04-04T19:15:00.000Z'),
		createdById: '7'
	},
	{
		id: '11',
		title: '@paginate SinglePage',
		done: false,
		updatedAt: new Date('2023-04-04T19:15:00.000Z'),
		createdById: '7'
	},
	{
		id: '12',
		title: '@paginate Infinite',
		done: false,
		updatedAt: new Date('2023-04-04T19:15:00.000Z'),
		createdById: '2'
	}
];
