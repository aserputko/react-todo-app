import { useDispatch } from 'react-redux';
import { TodoEntity } from '../models/TodoEntity';
import { markTodoAsCompleted, removeTodo } from '../slices/TodoSlice';

interface TodoListItemProps {
  todo: TodoEntity;
}

export const TodoListItem = ({ todo }: TodoListItemProps) => {
  const dispatch = useDispatch();
  const nameClassNames = todo.completed ? 'text-gray-300 dark:text-slate-600 line-through' : '';

  const handleMarkTodoAsCompleted = () => {
    dispatch(markTodoAsCompleted(todo.id));
  };

  const handleRemoveTodo = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <div className='flex flex-auto items-center p-5 bg-white dark:bg-slate-800'>
      <input
        className='peer relative appearance-none w-6 h-6 border rounded-full border-gray-200 checked:border-0 checked:bg-gradient-to-br from-[#55DDFF] to-[#C058F3] cursor-pointer'
        type='checkbox'
        checked={todo.completed}
        onChange={() => handleMarkTodoAsCompleted()}
      />
      <i className='absolute icon icon-sm icon-check hidden peer-checked:block pointer-events-none ml-2'></i>

      <span className={`flex flex-auto px-2 ${nameClassNames}`}>{todo.name}</span>
      <button type='button' onClick={() => handleRemoveTodo()}>
        <i className='icon icon-cross'></i>
      </button>
    </div>
  );
};
