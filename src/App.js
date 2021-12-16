import React, { useState, useEffect } from 'react';
import Navbar from './component/Navbar';
import {Switch, Route} from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Menu from './pages/menu';
import Footer from './component/Footer';
import Dropdown from './component/Dropdown';
import Outh from './pages/outh';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        
        <Route path='/' exact component={Home}/>
        <Route path='/outh' exact component={Outh}/>
        <Route path='/App' exact component={App} />
        <Route path='/menu' component={Menu} />
        <Route path='/about' component={About} />

        </Switch>
      <Footer />
    </>
  );
}

export default App;
