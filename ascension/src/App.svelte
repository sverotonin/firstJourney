<script lang="ts">
	import './app.css';
	import TodoInput from './lib/TodoInput.svelte';
	import TodoList from './lib/TodoList.svelte';

	import { createTodosState } from './todos.svelte.ts';

	let todos = $state<Todo[]>([]);
	const { addTodo } = createTodosState();
</script>

<main class="flex w-full flex-col gap-4 rounded-lg bg-slate-700 p-8">
	<h1>Todo List MF!</h1>
	<TodoInput {addTodo} />
	<TodoList {todos} />
</main>

<style></style>
