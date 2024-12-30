import { ITask } from './src/types/tasks';

const baseUrl = 'http://localhost:3000';

export const getAllTodos = async (): Promise<ITask[]> => {
  const res = await fetch(`${baseUrl}/task`, { cache: 'no-store' });
  const todos = await res.json();
  return todos;
};

export const addTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/task`, {
    method: 'POST',
    headers: {
      'Content-Type': 'appllication/json',
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();
  return newTodo;
};

export const eidtTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/task/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'appllication/json',
    },
    body: JSON.stringify(todo),
  });
  const updateTodo = await res.json();
  return updateTodo;
};

export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/task/${id}`, {
    method: 'DELETE',
  });
};
