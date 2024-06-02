import styled from 'styled-components'
import { useNavigate, Link } from 'react-router-dom';


export default function NotFound() {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1);
  }

  return(
      <Wrapper>
        <Image src='/assets/404.png' />
        <Title>Page Not Found</Title>
        <ButtonContainer>
          <Back onClick={handleBack}>돌아가기</Back>
          <LinkStyle to={'/'}><Back>홈으로</Back></LinkStyle>
        </ButtonContainer>
      </Wrapper>
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
    color: white;

    @media screen and (max-width: 479px) {
      font-size: 40px;
    }
`;

const Image = styled.img`
  width: 200px;

  @media (max-width: 479px) {
    width: 70px;
  }
`;

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
  color: white;
  border: 2px solid #c8c8c8;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;

  transition: all ease 0.5s;

  &:hover {
    background-color: #545454;
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