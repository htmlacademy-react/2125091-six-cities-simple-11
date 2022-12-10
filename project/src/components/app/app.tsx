import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Main from '../../pages/main/main';
import Offers from '../../index';
import Login from '../../pages/login/login';
import notFound from '../../pages/notFound/404';
import Room from '../../pages/Room/room';
function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main offer={Offers.length}/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={notFound()} />
        <Route path='/offer/:id' element={<Room/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
