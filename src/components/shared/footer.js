import React from "react";
import styled from "styled-components";

import logo from "../../assets/atracker_logo.png";
import facebook from "../../assets/ic_facebook.png";
import twitter from "../../assets/ic_twitter.png";
import kakaotalk from "../../assets/ic_kakaotalk.png";
import instagram from "../../assets/ic_instagram.png";

const Footer = () => {
  return (
    <ComponentWrap>
      <FooterWrap className="gothamRegular">
        <img src={logo} className="logo" />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "0.3125rem",
          }}
        >
          <div style={{ marginRight: "3.125rem" }}>
            TRACK YOUR PROCESS AND PROGRESS
          </div>
          <div>Contact &nbsp;&nbsp;&nbsp;&nbsp;pier39brian@gmail.com</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "1.75rem",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginRight: "2.9375rem" }}>
              Copyright ©ATRAKER All Rights Reserved
            </div>
            <div className="notoLight">
              취업 후기를 제보해주세요. 수익화를 약속드립니다.
            </div>
          </div>
          <Social>
            <div style={{marginRight:'0.8125rem'}}>Share On</div>
            <img src={facebook} />
            <img src={twitter} />
            <img src={kakaotalk} />
            <img src={instagram} />
          </Social>
        </div>
      </FooterWrap>
    </ComponentWrap>
  );
};

const ComponentWrap = styled.div`
  width: 100%;
  background-color: #000;
  color: #969cb1;
  display: flex;
  justify-content: center;
  font-size: 0.75rem;
  line-height: 1.125rem;
  @media (max-width: 63.75rem) {
      display: none;
    }
`;

const FooterWrap = styled.div`
  width: 67.625rem;
  display: flex;
  flex-direction: column;
  font-size: 0.6875rem;

  .logo {
    width: 5.5625rem;
    height: 1.625rem;
    object-fit: contain;
    margin: 2.125rem 0 0.8538rem 0;
  }
`;

const Social = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 0.6875rem;
  line-height: 1rem;

  img {
    width: 2.1244rem;
    height: 2.1244rem;
    cursor: pointer;
    margin-right: 0.6875rem;
  }
`;
export default Footer;
