import React from 'react';
import { Link } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import '../styles/global.css';
import ToggleMode from '../components/Mode';
import { useRecoilState } from 'recoil';
import darkModeState from '../recoil/atoms/darkModeState';

const lightTheme = {
  colors: {
    background: 'white',
    text: 'black',
    button: 'black',
    buttonText: 'white',
    buttonHover: 'white',
    border: 'black',
  },
};

const darkTheme = {
  colors: {
    background: '#333',
    text: 'white',
    button: 'white',
    buttonText: '#333',
    buttonHover: '#333',
    border: 'white',
  },
};

export default function Home() {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <ToggleMode />
      <Wrapper>
        <Container>
          <Name>Park Choeun</Name>
          <Intro>Sunrin Internet High School - Security 118th</Intro>
          <Intro>Front-end Developer</Intro>
          <LinkStyle to={'/ce'}><Button>more info</Button></LinkStyle>
        </Container>
        <Container>
          <Name>Cho Yeseul</Name>
          <Intro>Sunrin Internet High School - Security 118th</Intro>
          <LinkStyle to={'/ys'}><Button>more info</Button></LinkStyle>
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  width: 100%; height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.background};

  @media all and (max-width: 700px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;

const Container = styled.div`
  width: 50%; height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 80px;
  margin-bottom: 2rem;

  @media screen and (max-width: 479px){
    font-size: 50px;
  }
`;

const Button = styled.div`
  width: 200px; height: 80px;
  padding: 20px;
  margin-top: 2rem;
  
  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: 30px;
  font-weight: bold;
  text-align: center;

  border: none;
  border-radius: 10px;
  transition: all 0.5s ease;

  &:hover{
    background-color: ${({ theme }) => theme.colors.buttonHover};
    color: ${({ theme }) => theme.colors.text};
    border: 2px solid ${({ theme }) => theme.colors.border};
  }

  @media screen and (max-width: 479px) {
    width: 140px; height: 70px;
    font-size: 18px;
    padding: 25px;
  }
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Intro = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  margin: 0;

  @media screen and (max-width: 479px){
    font-size: 14px;
  }
`;
