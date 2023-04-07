<script lang="ts">
	import TodoCreate from '$lib/comp/TodoCreate.svelte';
	import TodoItem from '$lib/comp/TodoItem.svelte';
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ Todos } = data);

	const prev = async () => {
		await Todos.loadPreviousPage();
	};

	const next = async () => {
		await Todos.loadNextPage();
	};
</script>

<h2>Todos</h2>

<button on:click={prev} disabled={!$Todos.pageInfo.hasPreviousPage}>Prev</button>
<button on:click={next} disabled={!$Todos.pageInfo.hasNextPage}>Next</button>

{#each $Todos.data?.todoConnection?.edges ?? [] as { node }}
	<!-- <div>
		{node.title}
	</div> -->
	<TodoItem {node} />
{/each}

<TodoCreate />

<!-- {JSON.stringify($Todos, null, 2)} -->
