import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// internal imports
import './App.css'; //keep as CSS stylesheet so global CSS styling
import CharacterList from './components/CharacterList';
import CharacterForm from './components/CharacterForm';
import Home from './components/Home';
import NotFound from './components/NotFound';
// import OrderList from './components/OrderList';

function App(){
  return (
    <div className="app-container">
      <Routes>
        {/* all different pages now instead of inside a component */}
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<CharacterList /> } /> 
        <Route path='/add-character' element={<CharacterForm />} />
        <Route path='/edit-character/:id' element={<CharacterForm />} />
        {/* catch all the other paths not associated with a page */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}


export default App

