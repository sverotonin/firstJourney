export type Todo = {
	id: number;
	name: string;
	complete: boolean;
};

let todos = $state<Todo[]>([]);

export function addTodo(name: string) {
	if (!name.trim()) return;
	todos = [
		...todos,
		{
			id: Date.now(),
			name,
			complete: false
		}
	];
}

export function removeTodo(id: number) {
	todos = todos.filter((todo) => todo.id !== id);
}

const hasTodos = $derived(todos.length > 0);
const completedCount = $derived(todos.filter((todo) => todo.complete).length);
