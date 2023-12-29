import { useSelector } from 'react-redux';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { TodoAddItem } from '../components/TodoAddItem';
import { TodoList } from '../components/TodoList';
import { TodosTitle } from '../components/TodoTitle';
import { isDarkTheme } from '../models/ThemeEntity';
import { selectCurrentTheme } from '../slices/ThemeSlice';

export const TodosPages = () => {
  const currentTheme = useSelector(selectCurrentTheme);

  const heroImageClassName = isDarkTheme(currentTheme)
    ? 'hero-image hero-image-dark'
    : 'hero-image hero-image-light';
  return (
    <>
      <div className={`w-full absolute left-0 top-0 right-0 ${heroImageClassName}`}></div>

      <div className='flex flex-col justify-center items-center p-5 z-10'>
        <div className='flex flex-col w-full max-w-[540px]'>
          <div className='flex justify-between items-center'>
            <TodosTitle />
            <ThemeSwitcher />
          </div>

          <TodoAddItem />

          <TodoList />

          {/* TODO: (TD-12) Drag & Drop */}
        </div>
      </div>
    </>
  );
};
