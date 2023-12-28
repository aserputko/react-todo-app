import type { PayloadAction } from '@reduxjs/toolkit';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { TodoEntity } from '../models/TodoEntity';
import { todosSeed } from './TodosSeed';

const ids = todosSeed.map((todo) => todo.id);
const entities = todosSeed.reduce((acc, todo) => ({ ...acc, [todo.id]: todo }), {});

const todosAdapter = createEntityAdapter<TodoEntity>();
const initialState = todosAdapter.getInitialState({ ids, entities });

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      prepare: (name: string): PayloadAction<TodoEntity> => {
        const id = nanoid();
        const todo: TodoEntity = { id, name, completed: false };
        return { type: todoSlice.actions.addTodo.type, payload: todo };
      },
      reducer: todosAdapter.addOne,
    },
    markTodoAsComplete: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const todo = state.entities[id];
      if (todo) {
        todosAdapter.updateOne(state, { id, changes: { completed: !todo.completed } });
      }
    },
    clearCompleted: (state) => {
      const completedIds = Object.values(state.entities)
        .filter((todo) => todo.completed)
        .map((todo) => todo.id);

      todosAdapter.removeMany(state, completedIds);
    },
  },
  selectors: {
    selectAllTodos: todosAdapter.getSelectors().selectAll,
    selectActiveTodosCount: (state) =>
      Object.values(state.entities).filter((todo) => !todo.completed).length,
    selectCompletedTodos: (state) => Object.values(state.entities).filter((todo) => todo.completed),
  },
});

/** Actions */
export const { addTodo, markTodoAsComplete, clearCompleted } = todoSlice.actions;

/** Selectors */
export const { selectAllTodos, selectActiveTodosCount } = todoSlice.selectors;

/** Reducer */
export default todoSlice.reducer;
