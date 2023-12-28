import { useDispatch, useSelector } from 'react-redux';
import { TodoFilterBy } from '../models/TodoEntity';
import { filterTodosBy, selectTodosFilterBy } from '../slices/TodoSlice';

export const TodoFilters = () => {
  const dispatch = useDispatch();
  const todosFilterBy = useSelector(selectTodosFilterBy);

  const isAllTodosActivated = todosFilterBy === TodoFilterBy.All;
  const isActiveTodosActivated = todosFilterBy === TodoFilterBy.Active;
  const isCompletedTodosActivated = todosFilterBy === TodoFilterBy.Completed;

  const handleFilterTodos = (filterBy: TodoFilterBy) => {
    dispatch(filterTodosBy(filterBy));
  };

  return (
    <div className='flex flex-auto justify-center'>
      <button
        className={`font-semibold mx-2 ${isAllTodosActivated && 'text-blue'}`}
        type='button'
        onClick={() => handleFilterTodos(TodoFilterBy.All)}
      >
        All
      </button>
      <button
        className={`font-semibold mx-2 ${isActiveTodosActivated && 'text-blue'}`}
        type='button'
        onClick={() => handleFilterTodos(TodoFilterBy.Active)}
      >
        Active
      </button>
      <button
        className={`font-semibold mx-2 ${isCompletedTodosActivated && 'text-blue'}`}
        type='button'
        onClick={() => handleFilterTodos(TodoFilterBy.Completed)}
      >
        Completed
      </button>
    </div>
  );
};
