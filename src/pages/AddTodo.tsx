

import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import {  AppDispatch } from '../redux/store';
import Button from '../components/Button';
import InputBox from '../components/InputBoxes';
import  {addTodo}  from '../redux/actions';
import { useNavigate } from 'react-router-dom';
// import { RootState } from '../redux/store';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

const AddTodo: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [newTodo, setNewTodo] = useState('');
//   const { todos, loading, error } = useSelector(
//     (state: RootState) => state.todos
//   );
const navigate=useNavigate()
  const handleAddTodo = () => {

    if (newTodo.trim()) {
      const todo:Todo = {
        userId: 1,
        id:Date.now(),
        title: newTodo,
        completed: false,
      };
      console.log(todo,"todoadd")
      dispatch(addTodo(todo));
      navigate('/')
      setNewTodo('');
    }
  };

  return (
    <div className="flex flex-col items-center p-4 mx-20 my-20">
      <InputBox 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        placeholder="Add new todo" 
      />
      <div className='mt-2'>
      <Button onClick={handleAddTodo}>Add Todo</Button>
      </div>
     
    </div>
  );
};

export default AddTodo;