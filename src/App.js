import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LikeListPage from './pages/LikeListPage';
import LikeDetailsPage from './pages/LikeDetailsPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

import IsPrivate from './components/IsPrivate';
import IsAnon from './components/IsAnon';
import MyGroupListPage from './pages/MyGroupListPage';
import GroupDetailsPage from './pages/GroupDetailsPage';



function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>

        <Route path="*" element={<HomePage />} />

        {/* Route IsAnon*/}

        <Route path='/signup' element={<IsAnon><SignupPage /></IsAnon>} />
        <Route path='/login' element={<IsAnon><LoginPage /></IsAnon>} />

        {/* Route IsPrivate */}
        
        <Route path='/' element={<HomePage />} />

        <Route path='/mygroup' element={<IsPrivate><MyGroupListPage /></IsPrivate>} />
        <Route path='/user/:userId' element={<IsPrivate><GroupDetailsPage /></IsPrivate>} />

        <Route path='/likes' element={<IsPrivate><LikeListPage /></IsPrivate>} />
        <Route path='/likes/:likeId' element={<IsPrivate><LikeDetailsPage /></IsPrivate>} />
        <Route path='/profile' element={<IsPrivate><ProfilePage /></IsPrivate>} />

      </Routes>

    </div>
  );
}

export default App;
