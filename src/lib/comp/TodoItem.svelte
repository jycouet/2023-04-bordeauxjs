<script lang="ts">
	import { fragment, graphql } from '$houdini';
	import type { TodoItem } from '$houdini';

	export let node: TodoItem;

	$: frag = fragment(
		node,
		graphql(`
			fragment TodoItem on Todo {
				id
				title
				done
				updatedAt
			}
		`)
	);

	const update = graphql(`
		mutation TodoUpdate($id: ID!, $done: Boolean!) {
			todoUpdate(id: $id, fields: { done: $done }) {
				...TodoItem
			}
		}
	`);

	const change = async (id: string, done: boolean) => {
		await update.mutate({ id, done });
	};
</script>

<div>
	<!-- {JSON.stringify($frag, null, 2)} -->

	<input
		id={$frag.id}
		type="checkbox"
		checked={$frag.done}
		on:change={() => change($frag.id, !$frag.done)}
	/>

	<label for={$frag.id}>
		{$frag.title}
		<i><small>({$frag.updatedAt.toLocaleDateString()})</small></i>
	</label>
</div>
