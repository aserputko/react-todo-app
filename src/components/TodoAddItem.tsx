import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../slices/TodoSlice';

export const TodoAddItem = () => {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState('');

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(todoName));
    setTodoName('');
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoName(e.target.value);
  };

  return (
    <form
      className='w-full flex flex-auto items-center bg-white border border-white dark:bg-slate-800 dark:border-slate-800 rounded-md p-5 mb-6'
      onSubmit={handleSubmitForm}
    >
      <span>(-)</span>
      <input
        className='flex flex-auto px-2 placeholder-gray-500 dark:placeholder-slate-500 bg-white dark:bg-slate-800 border border-white dark:border-slate-800'
        placeholder='Create a new todo...'
        value={todoName}
        onChange={handleChangeInput}
      />
    </form>
  );
};
