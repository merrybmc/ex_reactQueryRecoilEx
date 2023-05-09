import { Routes, Route } from 'react-router-dom';
import Main from './main';
import Test from './test';

export default function Router() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </>
  );
}
