import React from 'react'
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import darkModeState from '../recoil/atoms/darkModeState';

export default function ToggleMode() {
  const [checked, setChecked] = useRecoilState(darkModeState);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <Wrapper>
      <Guide>{checked ? 'Dark Mode' : 'Light Mode'}</Guide>
      <ToggleWrapper>
        <ToggleSwitch>
          <ToggleCheckbox checked={checked} onClick={handleToggle} />
          <ToggleSlider checked={checked} />
        </ToggleSwitch>
        <Image src={checked ? '/assets/moon.png' : '/assets/sun.png'} />
      </ToggleWrapper>
    </Wrapper>
    
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
`;

const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Guide = styled.p`
  color: white;
  margin-left: 15px;
`;

const ToggleSwitch = styled.label`
  position: relative;
  margin-left: 15px;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const ToggleCheckbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.checked ? '#333' : '#ccc'};
  -webkit-transition: 0.4s;
  transition: all ease 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: #fff;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  ${ToggleCheckbox}:checked + & {
    
    &:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  }
`;

const Image = styled.img`
  width: 30px; height: 30px;
  margin-left: 10px;
`;