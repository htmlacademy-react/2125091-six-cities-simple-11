import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Main from '../../pages/main/main';
import Offers from '../../index';
import Login from '../../pages/login/login';
import Room from '../../pages/Room/room';
import NotFound from '../../pages/notFound/404';
function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main offer={Offers.length}/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/offer/:id' element={<Room/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
