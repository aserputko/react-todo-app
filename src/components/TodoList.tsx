import { useSelector } from 'react-redux';
import { TodoEntity } from '../models/TodoEntity';
import { selectFilteredTodos } from '../slices/TodoSlice';
import { TodoListFooter } from './TodoListFooter';
import { TodoListItem } from './TodoListItem';

export const TodoList = () => {
  const todos = useSelector(selectFilteredTodos);

  return (
    <div className='flex flex-col w-full bg-white border border-white dark:bg-slate-800 dark:border-slate-800 py-1 rounded-md'>
      {todos.map((todo: TodoEntity) => {
        return (
          <>
            <TodoListItem key={todo.id} todo={todo} />
            <hr className='border-gray-200 dark:slate-700' />
          </>
        );
      })}

      <TodoListFooter />
    </div>
  );
};
