import React, { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import ToDoList from './ToDoList';
import ErrMsg from './msg/ErrMsg';
import SuccessMsg from './msg/SuccessMsg';
import { useDispatch, useSelector } from 'react-redux';
import { addTodos, removeTodos } from '../reduxStore/features/TodoSlice';

const InputForm = () => {
  const dispatch = useDispatch();
  const todosItem = useSelector((state) => state.todos.todosList);
  const [toDoValue, setToDoValue] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [showErr, setShowErr] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [category, setCategory] = useState('');
  const [showRemove, setShowRemove] = useState(false);
  const options = [
    {
      id: 1000,
      title: 'categories',
    },
    {
      id: 1001,
      title: 'personal',
    },
    {
      id: 1002,
      title: 'business',
    },
    {
      id: 1003,
      title: 'others',
    },
  ];
  const handleTodo = (e) => {
    e.preventDefault();
    if (toDoValue === '') {
      setErrMsg('Please write your todo!');
      setShowErr(true);
      setShowSuccess(false);
    } else if (category === '') {
      setErrMsg('Select a category');
      setShowErr(true);
      setShowSuccess(false);
    } else if (category === 'categories') {
      setErrMsg('Select a valid Category!');
      setShowErr(true);
      setShowSuccess(false);
    } else {
      dispatch(
        addTodos({
          id: Math.random(),
          todo: toDoValue,
          category: category,
        })
      );
      setToDoValue('');
      setShowSuccess(true);
      setShowErr(false);
      setSuccessMsg('Todo added Successfully');
    }
  };
  useEffect(() => {
    // const timer = setTimeout(timeFunction, 2000);
    const timer = setTimeout(() => {
      showErr && setShowErr(false);
      showSuccess && setShowSuccess(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [showErr, showSuccess]);
  //   function timeFunction() {
  //     showErr && setShowErr(false);
  //   }
  //   <button onclick="setTimeout(myFunction, 3000)">Try it</button>
  // <script>
  // function myFunction() {
  //   alert('Hello');
  // }
  return (
    <div className="w-full bg-bodyColor flex flex-col gap-4">
      <div className="flex items-center gap-4 h-12">
        <input
          onChange={(e) => setToDoValue(e.target.value)}
          value={toDoValue}
          className="bg-bodyColor w-[80%] h-full  border-[1px] border-gray-400 py-2 px-4 placeholder:text-gray-400 text-white text-base placeholder:text-sm tracking-wide rounded-md outline-none focus-visible:border-orange-600 hover:border-white "
          type="text"
          placeholder="Enter your Todo"
        />
        <div className="w-[20%] h-full relative">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full h-full text-center capitalize outline-none bg-bodyColor border-[1px] border-gray-400 px-1 cursor-pointer appearance-none rounded-md focus-visible:border-orange-600 hover:border-white"
            name=""
            id=""
          >
            {options.map((item) => {
              return (
                <>
                  <option key={item.id}>{item.title}</option>
                </>
              );
            })}
          </select>
          <span className="absolute right-3 top-4">
            <FaChevronDown />
          </span>
        </div>
      </div>
      <button
        onClick={handleTodo}
        className="w-full border-[1px] border-gray-400 hover:border-gray-200 duration-300 font-titleFont font-semibold tracking-wider text-gray-300 hover:text-orange-600 h-10 uppercase rounded-md"
      >
        Add Todo
      </button>
      <div className="flex flex-col gap-4">
        <ul className="grid grid-cols-1 gap-4 border border-gray-600 shadow-todoShadow mt-6 p-4">
          {todosItem.length > 0 ? (
            <>
              {todosItem.map((item) => {
                return <ToDoList key={item.id} todo={item} />;
              })}
            </>
          ) : (
            <p className="text-center text-base text-yellow-500 font-medium font-titleFont tracking-wide">
              Your todo list is Empty
            </p>
          )}
        </ul>
        {todosItem.length > 0 && (
          <button
            onClick={() => setShowRemove(true)}
            className="w-40 h-8 text-sm font-titleFont text-orange-500 hover:text-red-500 font-semibold mx-auto bg-transparent border-[1px] border-gray-500 hover:border-red-500 duration-300"
          >
            Remove Todos
          </button>
        )}
      </div>
      {/* ======================== Error Message start here ===================== */}
      {showErr && <ErrMsg errMsg={errMsg} />}
      {/* ======================== Error Message end here ===================== */}
      {/* ======================== Success Message start here ===================== */}
      {showSuccess && <SuccessMsg successMsg={successMsg} />}
      {/* ======================== Success Message end here ===================== */}
      {showRemove && (
        <div className="w-full h-screen fixed bg-bodyColor top-0 left-0 bg-opacity-60">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-4 bg-bodyColor border border-red-500 rounded-md z-50 flex flex-col gap-4 shadow-todoShadow">
            <p className="text-xl text-center font-medium text-red-500">
              Are you sure to&nbsp;
              <span className="font-semibold underline underline-offset-2 decoration-[1px]">
                remove
              </span>
              &nbsp;all the todos?
            </p>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => dispatch(removeTodos()) & setShowRemove(false)}
                className="px-6 py-2 text-base font-titleFont text-orange-500 hover:text-red-500 font-semibold bg-transparent border-[1px] border-gray-500 hover:border-red-500 duration-300"
              >
                Yes
              </button>
              <button
                onClick={() => setShowRemove(false)}
                className="px-6 py-2 text-base font-titleFont text-orange-500 hover:text-green-500 font-semibold bg-transparent border-[1px] border-gray-500 hover:border-green-500 duration-300"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputForm;
