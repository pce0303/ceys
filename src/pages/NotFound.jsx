import styled from 'styled-components'
import { useNavigate, Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import darkModeState from '../recoil/atoms/darkModeState';
import ToggleMode from '../components/Mode';

export default function NotFound() {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1);
  }

  const [ darkMode, setDarkMode ] = useRecoilState(darkModeState);

  return(
    <>
      <ToggleMode/>
      <Wrapper>
        {/* <Image src='/assets/404.png' /> */}
        <Title darkMode={darkMode}>Page Not Found</Title>
        <ButtonContainer>
          <Back darkMode={darkMode} onClick={handleBack}>돌아가기</Back>
          <LinkStyle to={'/'}><Back darkMode={darkMode}>홈으로</Back></LinkStyle>
        </ButtonContainer>
      </Wrapper>
    </>
      
  );
}

const Wrapper = styled.div`
  width: 100%; height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.p`
    font-size: 90px;
    font-weight: bolder;
    color: ${props => props.darkMode ? 'white' : '#333'};

    @media screen and (max-width: 479px) {
      font-size: 30px;
    }
`;

// const Image = styled.img`
//   width: 200px;

//   @media (max-width: 479px) {
//     width: 70px;
//   }
// `;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 2rem;
`;

const Back = styled.button`
  width: 100px; height: 50px;
  background-color: transparent;
  color: ${props => props.darkMode ? '#fff' : '#333'};
  border: 2px solid ${props => props.darkMode ? '#fff' : '#333'};
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;

  transition: all ease 0.5s;

  &:hover {
    background-color: ${props => props.darkMode ? '#fff' : '#333'};
    color: ${props => props.darkMode ? '#333' : '#fff'};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 479px) {
    width: 70px; height: 35px;
    font-size: 10px;
  }
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: inherit;
`;