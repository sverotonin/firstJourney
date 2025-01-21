<!-- TodoList.svelte -->
<script lang="ts">
	import { todos, removeTodo, type Todo } from '../todos.svelte';

	// Correct $props syntax
	let title: string = $props();
	// OR if you want to set a default value:
	// export let title = $props<string>();
	// title ??= 'Todo List';  // Set default after declaration

	const isEmpty = $derived(!todos.length);
</script>

<div class="h-52 rounded-lg bg-black">
	<h2>{title}</h2>

	{#if !isEmpty}
		<ul>
			{#each todos as todo (todo.id)}
				<li>
					<input type="checkbox" bind:checked={todo.complete} />
					<span>{todo.name}</span>
					<button onclick={() => removeTodo(todo.id)}>Delete</button>
				</li>
			{/each}
		</ul>
	{:else}
		<p>No todos yet. Add one above!</p>
	{/if}
</div>
