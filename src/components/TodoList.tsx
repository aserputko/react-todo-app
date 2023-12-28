import { TodoEntity } from '../models/TodoEntity';
import { TodoListItem } from './TodoListItem';

interface TodoListProps {
  todos: TodoEntity[];
}

export const TodoList = ({ todos }: TodoListProps) => {
  const todosLength = todos.length;
  return (
    <div className='flex flex-col w-full max-w-[540px] bg-white border border-white py-1 rounded-md'>
      {todos.map((todo: TodoEntity, index: number) => {
        const isLast = todosLength === index + 1;
        return (
          <>
            <TodoListItem todo={todo} />
            {!isLast && <hr className='border-gray-200' />}
          </>
        );
      })}
    </div>
  );
};
