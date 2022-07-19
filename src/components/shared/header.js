import React from "react";
import styled from "styled-components";
import logo from "../../assets/atracker_logo.png";
import slogan from "../../assets/header_slogan.png";

const Header = () => {
  return (
    <ContainerWrap>
      <HeaderWrap>
        <img src={logo} className='logo'/>
        <img src={slogan} className='slogan'/>
        <div style={{width:'6.9375rem'}}/>
      </HeaderWrap>
    </ContainerWrap>
  );
};

const ContainerWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 63.75rem) {
    display: none;
  }
`;

const HeaderWrap = styled.div`
  width: 67.625rem;
  margin-top:2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .logo {
    width: 6.9375rem;
    height: 2rem;
    object-fit: contain;
  }

  .slogan {
    width: 12.125rem;
    height: 0.875rem;
    object-fit: contain;
  }
`;

export default Header;
