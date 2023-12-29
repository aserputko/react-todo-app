import { useDispatch, useSelector } from 'react-redux';
import { clearCompletedTodos, selectActiveTodosCount } from '../slices/TodoSlice';
import { TodoFilters } from './TodoFilters';

export const TodoListFooter = () => {
  const dispatch = useDispatch();
  const activeTodosCount = useSelector(selectActiveTodosCount);

  const handleClearCompletedTodos = () => {
    dispatch(clearCompletedTodos());
  };

  return (
    <div className='flex flex-auto justify-between p-5 bg-white text-gray-500 dark:bg-slate-800 dark:text-slate-500 text-sm'>
      <div>{activeTodosCount} item(s) left</div>

      <TodoFilters />

      <button type='button' onClick={() => handleClearCompletedTodos()}>
        Clear Completed
      </button>
    </div>
  );
};
