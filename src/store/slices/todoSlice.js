import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return data;
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchTodos.pending]: state => {
      state.isLoading = true;
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.todos = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchTodos.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },
  },
});

export default todosSlice.reducer;
