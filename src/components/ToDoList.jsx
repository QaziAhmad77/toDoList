import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodos } from '../reduxStore/features/TodoSlice';

const ToDoList = ({ todo }) => {
  const [mark, setMark] = useState(false);
  const dispatch = useDispatch();
  console.log(todo,"hiiii");
  return (
    <li
      onClick={() => setMark(!mark)}
      className={`${
        mark
          ? 'border-l-orange-500 border-orange-900'
          : 'border-l-green-500 border-green-900'
      } flex items-center justify-between w-full font-titleFont font-medium text-base border-[1px] border-l-[6px] px-2 py-2 cursor-pointer `}
    >
      {todo.todo}
      <span
        onClick={() => dispatch(deleteTodos(todo.id))}
        className="text-xl text-gray-300 hover:text-red-500 duration-300 cursor-pointer"
      >
        <MdDelete />
      </span>
    </li>
  );
};

export default ToDoList;
