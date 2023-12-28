import { useDispatch } from 'react-redux';
import { TodoEntity } from '../models/TodoEntity';
import { markTodoAsCompleted, removeTodo } from '../slices/TodoSlice';

interface TodoListItemProps {
  todo: TodoEntity;
}

export const TodoListItem = ({ todo }: TodoListItemProps) => {
  const dispatch = useDispatch();
  const nameClassNames = todo.completed ? 'text-gray-300 line-through' : '';

  const handleMarkTodoAsCompleted = () => {
    dispatch(markTodoAsCompleted(todo.id));
  };

  const handleRemoveTodo = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <div className='flex flex-auto items-center p-5 bg-white'>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={() => handleMarkTodoAsCompleted()}
      />
      <span className={`flex flex-auto px-2 ${nameClassNames}`}>{todo.name}</span>
      <button type='button' onClick={() => handleRemoveTodo()}>
        X
      </button>
    </div>
  );
};
