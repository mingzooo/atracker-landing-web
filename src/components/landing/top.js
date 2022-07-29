import React from "react";
import styled from "styled-components";
import Header from "../shared/header";

import top_left from '../../assets/top_left.png';
import top_right from '../../assets/top_right.png';
import down_arrow from "../../assets/download_arrow.png";
import left_phone from '../../assets/left_phone.png';
import right_phone from "../../assets/right_phone.png";

const Top = () => {
  return (
    <ContainerWrap>
      <img className="img_left" src={top_left} />
      <Header />
      <img className="img_right" src={top_right} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TopWrap>
          <TextWrap>
            <div className="notoLight title-text">
              취업기록,
              <br />
              <span className="notoRegular">아직도</span>
              <br />
              엑셀에 정리해?
            </div>
            <div className="notoLight sub-text">
              어트래커에서{" "}
              <span className="notoMedium">대기업 지원 후기 확인</span>하고{" "}
              <span className="notoMedium">선물 응모</span>하기
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <img src={down_arrow} className="download-arrow" />
              <div className="gothamRegular download-text">App Store</div>
              <div className="gothamRegular download-text">Google Play</div>
            </div>
          </TextWrap>
          <img src={left_phone} className="left-phone" />
          <img src={right_phone} className="right-phone"/>
        </TopWrap>
      </div>
    </ContainerWrap>
  );
};

const ContainerWrap = styled.div`
  position: relative;

  .img_left {
    position: absolute;
    width: 32.25rem;
    height: 100%;
    top: 0;
    left: 0;

    @media (max-width: 63.75rem) {
    display: none;
  }
  }

  .img_right{
    position: absolute;
    width: 32.25rem;
    height: 100%;
    top: 0;
    right: 0;

    @media (max-width: 63.75rem) {
    display: none;
  }
  }

  @media (max-width: 63.75rem) {
    display: none;
  }
`;

const TopWrap = styled.div`
  width: 67.625rem;
  display: flex;
  flex-direction: row;
  color: #fff;
  background: #272A35;

  img {
    height: 33.375rem;
    object-fit: fill;
  }

  .left-phone {
    height: 25.625rem;
    position: relative;
    bottom: -7.75rem;
    right: -1.875rem;
  }

  .right-phone{
    position: relative;
  }

`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .title-text {
    margin: 4.5rem 0 3.5625rem 0;
    font-size: 3.7892rem;
    line-height: 4.9375rem;
  }

  .sub-text {
    font-size: 1.25rem;
    line-height: 2rem;
    margin-bottom: 0.75rem;
  }

  .download-text {
    font-size: 1rem;
    line-height: 1.6875rem;
    border-bottom: 0.0625rem solid #37ffdb;
    margin-right: 0.9375rem;
  }

  .download-arrow {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.9375rem;
  }
`;
export default Top;
