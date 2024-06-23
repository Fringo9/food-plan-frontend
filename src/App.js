// src/App.js
import React, { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import WeeklyPlan from './components/WeeklyPlan';
import NavBar from './components/NavBar';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      <NavBar />
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <div>
          <Home user={user} />
          <WeeklyPlan weeklyPlan={user.weeklyPlan} />
        </div>
      )}
    </div>
  );
};

export default App;

