import { useSelector } from 'react-redux';
import { TodoEntity } from '../models/TodoEntity';
import { selectAllTodos } from '../slices/TodoSlice';
import { TodoListFooter } from './TodoListFooter';
import { TodoListItem } from './TodoListItem';

export const TodoList = () => {
  const todos = useSelector(selectAllTodos);

  return (
    <div className='flex flex-col w-full bg-white border border-white py-1 rounded-md'>
      {todos.map((todo: TodoEntity) => {
        return (
          <>
            <TodoListItem key={todo.id} todo={todo} />
            <hr className='border-gray-200' />
          </>
        );
      })}

      <TodoListFooter />
    </div>
  );
};
