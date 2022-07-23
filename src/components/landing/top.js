import React from "react";
import styled from "styled-components";
import Header from "../shared/header";

import lines from "../../assets/lines.png";
import down_arrow from "../../assets/download_arrow.png";
import left_phone from '../../assets/left-phone.png';
import right_phone from "../../assets/atracker_screenshot.png";

const Top = () => {
  return (
    <ContainerWrap>
      <img className="img_line" src={lines} />
      <Header />
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
              <div className="gothamRegular download-text">Download</div>
              <img src={down_arrow} className="download-arrow" />
            </div>
          </TextWrap>
          <img src={left_phone} className="left-phone" />
          <img src={right_phone} />
        </TopWrap>
      </div>
    </ContainerWrap>
  );
};

const ContainerWrap = styled.div`
  background: #292c3f;

  .img_line {
    position: absolute;
    width: 21.875rem;
    height: 21.875rem;
    top: -7.5rem;
    left: -6.25rem;

    @media (max-width: 67.5rem) {
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

`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;

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
    border-bottom: 0.0625rem solid #37ffdb;
  }

  .download-arrow {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 0.625rem;
  }
`;
export default Top;
