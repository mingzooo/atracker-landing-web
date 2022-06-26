import React, { useState } from "react";
import styled from "styled-components";

import Review from "./review";

const Reviews = () => {

    const [positionIndex, setPositionIndex] = useState(0);
    
    const onClickHandler = (id) => {
        setPositionIndex(id);
    }

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
          <Review id={positionIndex}/>
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
  font-family: 'Gotham';
  font-style: normal;
  font-weight: 400;

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


export default Reviews;
