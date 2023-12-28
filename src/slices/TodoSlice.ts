import type { PayloadAction } from '@reduxjs/toolkit';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { TodoEntity } from '../models/TodoEntity';

const todos: TodoEntity[] = [
  {
    id: '1',
    name: 'Complete online JavaScript course',
    completed: true,
  },
  {
    id: '2',
    name: 'Jog around the park 3x',
    completed: false,
  },
  {
    id: '3',
    name: '10 minutes meditation',
    completed: false,
  },
  {
    id: '4',
    name: 'Read for 1 hour',
    completed: false,
  },
  {
    id: '5',
    name: 'Pick up groceries',
    completed: false,
  },
  {
    id: '6',
    name: 'Complete Todo App on Frontend Mentor',
    completed: false,
  },
];
const ids = todos.map((todo) => todo.id);
const entities = todos.reduce((acc, todo) => ({ ...acc, [todo.id]: todo }), {});

const todosAdapter = createEntityAdapter<TodoEntity>();

export const todoSlice = createSlice({
  name: 'todos',
  initialState: todosAdapter.getInitialState({ ids, entities }),
  reducers: {
    addTodo: {
      prepare: (name: string): PayloadAction<TodoEntity> => {
        const id = nanoid();
        const todo: TodoEntity = { id, name, completed: false };
        return { type: todoSlice.actions.addTodo.type, payload: todo };
      },
      reducer: todosAdapter.addOne,
    },
  },
  selectors: {
    selectAllTodos: (state) => {
      return state.ids.map((id) => state.entities[id]);
    },
  },
});

/** Actions */
export const { addTodo } = todoSlice.actions;

/** Selectors */
export const { selectAllTodos } = todoSlice.selectors;

/** Reducer */
export default todoSlice.reducer;
