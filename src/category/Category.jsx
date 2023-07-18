import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ToDoList from '../components/ToDoList';

const Category = () => {
  const { todosList } = useSelector((state) => state.todos);
  const [personalTodos, setPersonalTodos] = useState([]);
  const [businessTodos, setBusinessTodos] = useState([]);
  const [othersTodos, setOthersTodos] = useState([]);

  // Button onClick function start here
  const [activePersonal, setActivePersonal] = useState(false);
  const [activeBusiness, setActiveBusiness] = useState(false);
  const [activeOthers, setActiveOthers] = useState(false);

  useEffect(() => {
    const personalCategories = todosList.filter(
      (item) => item.category === 'personal'
    );
    setPersonalTodos(personalCategories);
    const businessCategories = todosList.filter(
      (item) => item.category === 'business'
    );
    setBusinessTodos(businessCategories);
    const otherCategories = todosList.filter(
      (item) => item.category === 'others'
    );
    setOthersTodos(otherCategories);
  }, [todosList]);
  return (
    <div className="w-full lgl:w-[850px] h-[200px] md:h-[150px] bg-bodyColor flex flex-col md:flex-row items-center justify-start">
      <div className="w-full md:w-1/6 h-full">
        <p
          onClick={() => {
            setActivePersonal(true) &
              setActiveBusiness(false) &
              setActiveOthers(false);
          }}
          className={`${
            activePersonal && ' border-[1px] border-red-500'
          } categoryP`}
        >
          Personal
        </p>
        <p
          onClick={() => {
            setActivePersonal(false) &
              setActiveBusiness(true) &
              setActiveOthers(false);
          }}
          className={`${
            activeBusiness && ' border-[1px] border-red-500'
          } categoryP`}
        >
          Business
        </p>
        <p
          onClick={() => {
            setActivePersonal(false) &
              setActiveBusiness(false) &
              setActiveOthers(true);
          }}
          className={`${
            activeOthers && ' border-[1px] border-red-500'
          } categoryP`}
        >
          Others
        </p>
      </div>
      <div className="w-full md:w-5/6 h-full flex items-center overflow-y-scroll scrollbar-hide">
        <p
          className={`${
            activePersonal || activeBusiness || activeOthers
              ? 'hidden'
              : 'w-full text-center text-base font-titleFont font-semibold tracking-wider text-green-500'
          }`}
        >
          Click on the tab to chose your todos category
        </p>
        {activePersonal && (
          <ul className="w-full h-[90%] flex flex-col items-center gap-2 px-2">
            {personalTodos.length > 0 ? (
              <>
                {personalTodos.map((item) => {
                  return <ToDoList key={item.id} todo={item} />;
                })}
              </>
            ) : (
              <li className="w-full h-full text-lg flex justify-center items-center text-red-500 text-center font-semibold">
                Personal todo list is empty
              </li>
            )}
          </ul>
        )}
        {activeBusiness && (
          <ul className="w-full h-[90%] flex flex-col items-center gap-2 px-2">
            {businessTodos.length > 0 ? (
              <>
                {businessTodos.map((item) => {
                  return <ToDoList key={item.id} todo={item} />;
                })}
              </>
            ) : (
              <li className="w-full h-full text-lg flex justify-center items-center text-red-500 text-center font-semibold">
                Business todo list is empty
              </li>
            )}
          </ul>
        )}
        {activeOthers && (
          <ul className="w-full h-[90%] flex flex-col items-center gap-2 px-2">
            {othersTodos.length > 0 ? (
              <>
                {othersTodos.map((item) => {
                  {
                    console.log(item, 'THis is item');
                  }
                  return <ToDoList key={item.id} todo={item} />;
                })}
              </>
            ) : (
              <li className="w-full h-full text-lg flex justify-center items-center text-red-500 text-center font-semibold">
                Others todo list is empty
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Category;
