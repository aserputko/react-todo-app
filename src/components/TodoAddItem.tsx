import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../slices/TodoSlice';

export const TodoAddItem = () => {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState('');

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(todoName));
    setTodoName('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoName(e.target.value);
  };

  return (
    <form
      className='w-full flex flex-auto items-center bg-white border border-white rounded-md p-5 mb-6'
      onSubmit={handleFormSubmit}
    >
      <span>(-)</span>
      <input
        className='flex flex-auto px-2'
        placeholder='Create a new todo...'
        value={todoName}
        onChange={handleInputChange}
      />
    </form>
  );
};
