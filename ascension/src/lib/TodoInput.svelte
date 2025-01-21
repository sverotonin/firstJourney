<!-- TodoInput.svelte -->
<script lang="ts">
	import { addTodo } from '../todos.svelte';

	let newTodoName = $state('');

	function handleSubmit() {
		addTodo(newTodoName);
		newTodoName = '';
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<input type="text" bind:value={newTodoName} placeholder="Add new todo..." />
	<button type="submit">Add Todo</button>
</form>
