<script lang="ts">
	import { graphql } from '$houdini';
	import { backInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	let value = '';
	let message: string | null = '';

	const create = graphql(`
		mutation TodoCreate($title: String!) {
			todoCreate(fields: { title: $title }) {
				...todos_insert
			}
		}
	`);

	const addTodo = async () => {
		if (value !== '') {
			message = null;
			await create.mutate({ title: value });
			value = '';
		} else {
			message = 'oOuuups! Il faut peut etre entrer un titre?!';
		}
	};
</script>

<form on:submit|preventDefault={addTodo} class="flex">
	<input bind:value placeholder="Enter your title" />
	<button type="submit">Ajouter</button>

	{#if message}
		<div transition:fly={{ easing: backInOut, x: -150 }} style="color: red;">
			{message}
		</div>
	{/if}
</form>
