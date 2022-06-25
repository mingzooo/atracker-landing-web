import React, { useEffect, useState } from "react";
import styled from "styled-components";

import circle from '../../assets/circle.png';

const Reviews = () => {

    const [positionIndex, setPositionIndex] = useState(0);
    
    const onClickHandler = (id) => {
        setPositionIndex(id);
    }

    useEffect(() => {
      console.log(positionIndex);
    }, [positionIndex])

  return (
    <ComponentWrap>
      <ReviewPageWrap>
        <MenuWrap>
          <ul className="gothamRegular">
            <li className={positionIndex===0 ? "is-active" : ""} onClick={()=>onClickHandler(0)}>Position</li>
            <li className={positionIndex===1 ? "is-active" : ""} onClick={()=>onClickHandler(1)}>Position</li>
            <li className={positionIndex===2 ? "is-active" : ""} onClick={()=>onClickHandler(2)}>Position</li>
            <li className={positionIndex===3 ? "is-active" : ""} onClick={()=>onClickHandler(3)}>Position</li>
            <li className={positionIndex===4 ? "is-active" : ""} onClick={()=>onClickHandler(4)}>Position</li>
          </ul>
        </MenuWrap>
        <ReviewWrap>
          <TitleWrap>
            <div className="company-text">보드카썬라이즈 ・ <span className="gothamRegular">2022. 6. 2. 0:41</span></div>
            <div className="title-text">21년 하반기 기술보증기금 최탈 후기 (예비 4번)</div>
          </TitleWrap>
          <DetailWrap>
            <div className="detail-container">
              <img src={circle} className="img-circle"/>
              <div className="detail-wrap">
                <div className="detail-title">채용 절차 및 면접 방식</div>
                <div className="detail-text">- 자유 양식의 이력서+자기소개서 → 1차 면접 → 합격
                <br/>제출 약 3일 뒤 인터뷰를 하고 싶다는 메일이 왔고, 면접 일정을 조정하고 참석했다. 
                <br/>- 2:1 (면접관 2 지원자 1) 비대면 면접</div>
              </div>
            </div>
            <div className="detail-container">
              <img src={circle} className="img-circle"/>
              <div className="detail-wrap">
                <div className="detail-title">서류</div>
                <div className="detail-text">- 자유 양식의 이력서+자기소개서 → 1차 면접 → 합격
                <br/>제출 약 3일 뒤 인터뷰를 하고 싶다는 메일이 왔고, 면접 일정을 조정하고 참석했다. 
                <br/>- 2:1 (면접관 2 지원자 1) 비대면 면접</div>
              </div>
            </div>
            <div className="detail-container">
              <img src={circle} className="img-circle"/>
              <div className="detail-wrap">
                <div className="detail-title">면접</div>
                <div className="detail-text">- 자유 양식의 이력서+자기소개서 → 1차 면접 → 합격
                <br/>제출 약 3일 뒤 인터뷰를 하고 싶다는 메일이 왔고, 면접 일정을 조정하고 참석했다. 
                <br/>- 2:1 (면접관 2 지원자 1) 비대면 면접</div>
              </div>
            </div>
            <div className="gothamRegular source-text">© 보드카썬라이즈 All Rights Reserved. 21년 하반기 기술보증기금 최탈 후기(예비 4번)</div>
          </DetailWrap>
        </ReviewWrap>
      </ReviewPageWrap>
    </ComponentWrap>
  );
};

const ComponentWrap = styled.div`
  width: 100%;
  background-color: #14161E;
  color: #888ea3;
  font-size: 1rem;
  display: flex;
  justify-content: center;
`;

const ReviewPageWrap = styled.div`
  width: 67.625rem;
  display: flex;
  flex-direction: row;
`;

const MenuWrap = styled.div`
  width: 11.875rem;
  border-left: 1px solid #40475C;

  ul {
    list-style: none;
    margin-top: 3.125rem;
    line-height: 1.5rem;
  }

  li {
    margin-bottom: 1.5rem;
    cursor: pointer;
    line-height: 1.5rem;

    :hover{
      color: #A5ABBF;
    }
  }

  .is-active{
    text-decoration: underline;
    text-underline-position:under;
    font-weight: 700;
    color: #A5ABBF;
  }
`;

const ReviewWrap = styled.div`
  width: 55.75rem;
  border-left: 1px solid #40475C;
  border-right: 1px solid #40475C;
`;

const TitleWrap = styled.div`
  width: 100%;
  padding: 3.25rem 0 2.375rem 2.3125rem;

  .company-text{
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #B9BFD3;
  }

  .title-text{
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 300;
    font-size: 1.843rem;
    line-height: 2.75rem;

    color: #E9E9E9;
  }
`;

const DetailWrap = styled.div`
  width: 100%;
  padding-top: 4.375rem;
  border-top: 1px solid #40475C;
  color: #E9E9E9;

  .detail-container{
    position: relative;
    display: flex;
    flex-direction: row;
    margin-bottom: 3.75rem;
  }

  .img-circle{
    position: absolute;
    top: 0.25rem;
    left: -0.5625rem;
    width: 1.0625rem;
    height: 1.0625rem;
  }

  .detail-wrap{
    display: flex;
    flex-direction: column;
    margin-left: 1.8125rem;
  }

  .detail-title{
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 300;
    font-size: 1.2356rem;
    line-height: 2rem;
    margin-bottom: 2rem;
  }

  .detail-text{
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.6875rem;
  }

  .source-text{
    font-size: 0.75rem;
    line-height: 18px;
    color: #797F94;
    margin-left: 1.8125rem;
    margin-bottom: 3.6875rem;
  }
`;

export default Reviews;
