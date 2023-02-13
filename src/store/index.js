import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './slices/todoSlice';

const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});

export default store;