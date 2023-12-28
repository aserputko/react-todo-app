import { TodoAddItem } from '../components/TodoAddItem';
import { TodoList } from '../components/TodoList';
import { TodosTitle } from '../components/TodoTitle';

export const TodosPages = () => {
  return (
    <>
      {/* TODO: (TD-10, TD-11) Hero Image */}
      {/* TODO: (TD-13) Theme Switcher */}

      <div className='bg-gradient-to-r from-indigo-500 via-purple-500 w-full h-72 absolute left-0 top-0'></div>

      <div className='flex flex-col justify-center items-center p-5 z-10'>
        <div className='flex flex-col w-full max-w-[540px]'>
          <TodosTitle />

          <TodoAddItem />

          <TodoList />

          {/* TODO: (TD-8): Todos Filters */}

          {/* TODO: (TD-12) Drag & Drop */}
        </div>
      </div>
    </>
  );
};
