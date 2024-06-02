import React from 'react'
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import darkModeState from '../recoil/atoms/darkModeState';
import ToggleMode from '../components/Mode';

export default function Yeseul() {

  const [ darkMode, setDarkMode ] = useRecoilState(darkModeState);
  
  return(
    <Wrapper>
      <ToggleMode />
      <Test darkMode={darkMode}>Yeseul</Test>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%; height: 100%;
  display: flex;
`;

const Test = styled.p`
  color: ${props => props.darkMode ? 'white' : 'black'};
  font-size: 100px;
`;