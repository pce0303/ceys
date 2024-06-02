import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../styles/global.css';

export default function Home() {
  return (
    <>
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
    </>
  );
}


const Wrapper = styled.div`
  width: 100%; height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

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
  color: white;
  font-size: 80px;
  margin-bottom: 2rem;

  @media screen and (max-width: 479px){
    font-size: 50px;
  }
`;

const Button = styled.div`
  width: 200px; height: 100px;
  padding: 30px;
  margin-top: 2rem;
  
  background-color: white;
  color: black;
  font-size: 30px;
  font-weight: bold;
  text-align: center;

  border: none;
  border-radius: 10px;
  transition: all 0.5s ease;

  &:hover{
    background-color: black;
    color: white;
    border: 2px solid white;
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
  color: white;
  font-size: 20px;
  margin: 0;
`;