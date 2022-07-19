import React from "react";
import styled from "styled-components";

import logo from "../../assets/atracker_logo.png";

const Download = () => {
  return (
    <ComponentWrap>
      <DownloadWrap>
        <img src={logo} className="logo" />
        <div className="notoLight">
          취업 기록을 <span className="notoMedium">더 쉽고 가치있게,</span>{" "}
          어트래커에서 <span className="notoMedium">더 많은 취업 후기</span>를
          확인하세요.
        </div>
        <DownloadLink className="gothamRegular">
            <div className="text" style={{marginRight:"2.8125rem"}}>Google Play</div>
            <div className="text">App Store</div>
        </DownloadLink>
      </DownloadWrap>
    </ComponentWrap>
  );
};

const ComponentWrap = styled.div`
  width: 100%;
  background-color: #000;
  color: #969cb1;
  display: flex;
  justify-content: center;
  border-top: 0.0625rem solid #40475c;
  border-bottom: 0.0625rem solid #40475c;
  @media (max-width: 63.75rem) {
    display: none;
  }
`;

const DownloadWrap = styled.div`
  width: 67.625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  color: #fff;

  .logo {
    width: 6.9375rem;
    height: 2rem;
    object-fit: contain;
    margin: 3.375rem 0 1.3125rem 0;
  }
`;

const DownloadLink = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1.3125rem 0 2.8125rem 0;
  .text {
    font-size: 1.0125rem;
    line-height: 1.6875rem;
    border-bottom: 0.0625rem solid #e9e9e9;
    cursor: pointer;
  }
`;
export default Download;
