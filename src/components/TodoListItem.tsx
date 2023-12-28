import { TodoEntity } from '../models/TodoEntity';

interface TodoListItemProps {
  todo: TodoEntity;
}

export const TodoListItem = ({ todo }: TodoListItemProps) => {
  const checkboxClassName = todo.completed ? 'text-blue' : '';
  const nameClassNames = todo.completed ? 'text-gray-300 line-through' : '';

  return (
    <div className='flex flex-auto items-center p-5 bg-white'>
      <span className={`${checkboxClassName}`}>({todo.completed ? '+' : '-'})</span>
      <span className={`flex flex-auto px-2 ${nameClassNames}`}>{todo.name}</span>
      <span>X</span>
    </div>
  );
};
