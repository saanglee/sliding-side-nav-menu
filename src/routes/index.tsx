import { Route, Routes } from 'react-router-dom';
import Analytics from '../pages/Analytics';
import Dashboard from '../pages/Dashboard';
import Likes from '../pages/Likes';
import Schedule from '../pages/Schedule';
import User from '../pages/User';
import Layout from './Layout';

import styles from './routes.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='dashboard' element={<Dashboard />}></Route>
          <Route path='schedule' element={<Schedule />}></Route>
          <Route path='analytics' element={<Analytics />}></Route>
          <Route path='likes' element={<Likes />}></Route>
          <Route path='user' element={<User />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
