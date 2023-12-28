import { useSelector } from 'react-redux';
import { TodoEntity } from '../models/TodoEntity';
import { selectAllTodos } from '../slices/TodoSlice';
import { TodoListItem } from './TodoListItem';

export const TodoList = () => {
  const todos = useSelector(selectAllTodos);

  const todosLength = todos.length;
  return (
    <div className='flex flex-col w-full bg-white border border-white py-1 rounded-md'>
      {todos.map((todo: TodoEntity, index: number) => {
        const isLast = todosLength === index + 1;
        return (
          <>
            <TodoListItem key={todo.id} todo={todo} />
            {!isLast && <hr className='border-gray-200' />}
          </>
        );
      })}
    </div>
  );
};
