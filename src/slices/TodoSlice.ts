import type { PayloadAction } from '@reduxjs/toolkit';
import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { TodoEntity, TodoFilterBy } from '../models/TodoEntity';
import { RootState } from '../store';
import { todosSeed } from './TodosSeed';

const ids = todosSeed.map((todo) => todo.id);
const entities = todosSeed.reduce((acc, todo) => ({ ...acc, [todo.id]: todo }), {});

interface TodosState {
  ids: string[];
  entities: Record<string, TodoEntity>;
  filterBy: TodoFilterBy;
}

const initialState: TodosState = {
  ids,
  entities,
  filterBy: TodoFilterBy.All,
};

const todosAdapter = createEntityAdapter<TodoEntity>();

/** Selectors */
const selectTodosState = (state: RootState): TodosState => state.todos;
const adapterSelectors = todosAdapter.getSelectors(selectTodosState);

export const selectAllTodos = adapterSelectors.selectAll;
export const selectTodoById = adapterSelectors.selectById;

export const selectActiveTodos = createSelector(selectAllTodos, (todos) =>
  todos.filter((todo) => !todo.completed),
);

export const selectActiveTodosCount = createSelector(
  selectActiveTodos,
  (activeTodos) => activeTodos.length,
);

export const selectCompletedTodos = createSelector(selectAllTodos, (todos) =>
  todos.filter((todo) => todo.completed),
);

export const selectCompletedTodoIds = createSelector(selectCompletedTodos, (todos) =>
  todos.map((todo) => todo.id),
);

export const selectTodosFilterBy = createSelector(
  selectTodosState,
  (activeTodos) => activeTodos.filterBy,
);

export const selectFilteredTodos = createSelector(
  selectTodosFilterBy,
  selectAllTodos,
  selectActiveTodos,
  selectCompletedTodos,
  (filterBy, allTodos, activeTodos, completedTodos) => {
    switch (filterBy) {
      case TodoFilterBy.All:
        return allTodos;
      case TodoFilterBy.Active:
        return activeTodos;
      case TodoFilterBy.Completed:
        return completedTodos;
      default:
        return allTodos;
    }
  },
);

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
    markTodoAsCompleted: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const todo = selectTodoById({ todos: state }, action.payload);
      if (todo) {
        todosAdapter.updateOne(state, { id, changes: { completed: !todo.completed } });
      }
    },
    clearCompleted: (state) => {
      const completedIds = selectCompletedTodoIds({ [todoSlice.name]: state });
      todosAdapter.removeMany(state, completedIds);
    },
    filterTodosBy: (state, action: PayloadAction<TodoFilterBy>) => {
      state.filterBy = action.payload;
    },
  },
});

/** Actions */
export const { addTodo, markTodoAsCompleted, clearCompleted, filterTodosBy } = todoSlice.actions;
