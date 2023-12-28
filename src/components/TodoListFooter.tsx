import { useDispatch, useSelector } from 'react-redux';
import { clearCompleted, selectActiveTodosCount } from '../slices/TodoSlice';

export const TodoListFooter = () => {
  const dispatch = useDispatch();
  const activeTodosCount = useSelector(selectActiveTodosCount);

  const handleClearComlletedClick = () => {
    dispatch(clearCompleted());
  };

  return (
    <div className='flex flex-auto justify-between p-5 bg-white text-gray-500 text-sm'>
      <div>{activeTodosCount} item(s) left</div>

      <button type='button' onClick={handleClearComlletedClick}>
        Clear Completed
      </button>
    </div>
  );
};
