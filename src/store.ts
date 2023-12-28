import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './slices/TodoSlice';

export const store = configureStore({
  reducer: {
    [todoSlice.name]: todoSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
