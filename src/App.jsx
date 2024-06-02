import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Choeun from './pages/choeun';
import Yeseul from './pages/yeseul';
import NotFound from './pages/NotFound';
import { useRecoilValue } from 'recoil';
import { createGlobalStyle, keyframes } from 'styled-components';
import darkModeState from './recoil/atoms/darkModeState';

const App = () => {
  const darkMode = useRecoilValue(darkModeState);

  return (
      <BrowserRouter>
      <GlobalStyle darkMode={darkMode} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='ce' element={<Choeun />} />
          <Route path='ys' element={<Yeseul />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>    
  );
}

export default App;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const GlobalStyle = createGlobalStyle`
    body {
      background-color: ${({ darkMode }) => (darkMode ? '#303030' : '#fafafa')};
      color: ${({ darkMode }) => (darkMode ? '#fafafa' : '#303030')};
      transition: background-color 0.3s ease, color 0.3s ease;
      animation: ${fadeIn} 0.5s ease; 
    }
  `;
