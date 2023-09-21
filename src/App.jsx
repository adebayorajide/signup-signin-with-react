import { useState } from 'react'
import './App.css'
import Signup from './Signup'
import Login from './Login'
import Start from './Start';

function App() {
  const [currentPage, setCurrentPage] = useState('start');

  const togglePage = (pageName) => {
    setCurrentPage(pageName)
  }

  return (
    <div>
      {currentPage == "start" ? (
        <Start pageSwitch={togglePage} pageSwitch={togglePage} />
      ) : currentPage == "login" ? (
        <Login pageSwitch={togglePage} />
      ) : (
        <Signup pageSwitch={togglePage} />
      )}
    </div>
  );
}

export default App
