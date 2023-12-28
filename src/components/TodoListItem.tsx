import { useDispatch } from 'react-redux';
import { TodoEntity } from '../models/TodoEntity';
import { markTodoAsComplete } from '../slices/TodoSlice';

interface TodoListItemProps {
  todo: TodoEntity;
}

export const TodoListItem = ({ todo }: TodoListItemProps) => {
  const dispatch = useDispatch();
  const nameClassNames = todo.completed ? 'text-gray-300 line-through' : '';

  const handleCheckboxChange = () => {
    dispatch(markTodoAsComplete(todo.id));
  };

  return (
    <div className='flex flex-auto items-center p-5 bg-white'>
      <input type='checkbox' checked={todo.completed} onChange={handleCheckboxChange} />
      <span className={`flex flex-auto px-2 ${nameClassNames}`}>{todo.name}</span>
      <span>X</span>
    </div>
  );
};
