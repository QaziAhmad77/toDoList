import Category from './category/Category';
import Footer from './components/Footer';
import InputForm from './components/InputForm';
import { useSelector } from 'react-redux';

const App = () => {
  const { todosList } = useSelector((state) => state.todos);
  return (
    <div className="w-full min-h-screen pt-4 font-bodyFont bg-gradient-to-t from-sky-600 via-sky-400 to-red-300 text-white px-4 flex flex-col gap-10 justify-center items-center">
      {todosList.length > 0 ? <Category /> : ''}
      <div className="w-ful lgl:w-[850px] h-full bg-bodyColor p-4 lgl:p-10 flex flex-col gap-10">
        <InputForm />
        <Footer />
      </div>
    </div>
  );
};

export default App;
