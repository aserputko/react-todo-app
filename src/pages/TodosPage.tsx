import { TodoList } from '../components/TodoList';
import { TodosTitle } from '../components/TodoTitle';
import { TodoEntity } from '../models/TodoEntity';

export const TodosPages = () => {
  const todos: TodoEntity[] = [
    {
      id: '1',
      name: 'Complete online JavaScript course',
      completed: true,
    },
    {
      id: '2',
      name: 'Jog around the park 3x',
      completed: false,
    },
    {
      id: '3',
      name: '10 minutes meditation',
      completed: false,
    },
    {
      id: '4',
      name: 'Read for 1 hour',
      completed: false,
    },
    {
      id: '5',
      name: 'Pick up groceries',
      completed: false,
    },
    {
      id: '6',
      name: 'Complete Todo App on Frontend Mentor',
      completed: false,
    },
  ];

  return (
    <>
      {/* TODO: (TD-10, TD-11) Hero Image */}
      <div className='bg-gradient-to-r from-indigo-500 via-purple-500 w-full h-72 absolute left-0 top-0'></div>

      <div className='flex flex-col	flex-auto items-center p-5 z-10'>
        {/* TODO: (TD-13) Theme Switcher */}

        <TodosTitle />

        {/* TODO: (TD-6) Add Todo Control */}

        <TodoList todos={todos} />

        {/* TODO: (TD-8): Todos Filters */}

        {/* TODO: (TD-12) Drag & Drop */}
      </div>
    </>
  );
};
