import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchTodos } from './store/slices/todoSlice';

function App() {
  const { todos, error, isLoading } = useSelector(state => state.todos);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default App;
