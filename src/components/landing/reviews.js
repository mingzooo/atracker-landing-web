import React, { useState } from "react";
import styled from "styled-components";

import menubar from '../../assets/step_bar.png';

import Review from "./review";

const Reviews = () => {
  const [positionIndex, setPositionIndex] = useState(0);

  const onClickHandler = (id) => {
    setPositionIndex(id);
  };

  return (
    <ComponentWrap>
      <ReviewPageWrap>
        <MenuWrap>
          <ul className="gothamRegular">
            <li
              className={positionIndex === 0 ? "is-active" : ""}
              onClick={() => onClickHandler(0)}
            >
              Position
            </li>
            <li
              className={positionIndex === 1 ? "is-active" : ""}
              onClick={() => onClickHandler(1)}
            >
              Position
            </li>
            <li
              className={positionIndex === 2 ? "is-active" : ""}
              onClick={() => onClickHandler(2)}
            >
              Position
            </li>
            <li
              className={positionIndex === 3 ? "is-active" : ""}
              onClick={() => onClickHandler(3)}
            >
              Position
            </li>
            <li
              className={positionIndex === 4 ? "is-active" : ""}
              onClick={() => onClickHandler(4)}
            >
              Position
            </li>
          </ul>
        </MenuWrap>
        <img className="menu-bar-img" src={menubar}/>
        <ReviewWrap>
          <Review id={positionIndex} />
        </ReviewWrap>
      </ReviewPageWrap>
    </ComponentWrap>
  );
};

const ComponentWrap = styled.div`
  width: 100%;
  background-color: #14161e;
  color: #888ea3;
  font-size: 1rem;
  display: flex;
  justify-content: center;
`;

const ReviewPageWrap = styled.div`
  width: 67.625rem;
  display: flex;
  flex-direction: row;

  @media (max-width: 63.75rem) {
    width: 100%;
    flex-direction: column;
  }

  .menu-bar-img{
    display: none;

    @media (max-width: 63.75rem) {
    display: flex;
    width: 100%;
    height: 0.0625rem;
  }
  }
`;

const MenuWrap = styled.div`
  width: 11.875rem;
  border-left: 1px solid #40475c;
  font-family: "Gotham";
  font-style: normal;
  font-weight: 400;

  @media (max-width: 63.75rem) {
    width: 23.125rem;
    border-right: 1px solid #40475c;
  }

  ul {
    list-style: none;
    margin-top: 3.125rem;
    line-height: 1.5rem;

    @media (max-width: 63.75rem) {
      margin: 0;
      padding: 0;
      margin: 0.875rem 0;
      display: flex;
      flex-direction: row;
      overflow-x: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  li {
    margin-bottom: 1.5rem;
    cursor: pointer;
    line-height: 1.5rem;

    :hover {
      color: #a5abbf;
    }

    @media (max-width: 63.75rem) {
      margin: 0 1rem;
    }
  }

  .is-active {
    text-decoration: underline;
    text-underline-position: under;
    font-weight: 700;
    color: #a5abbf;

    @media (max-width: 63.75rem) {
      text-decoration: none;
    }
  }
`;

const ReviewWrap = styled.div`
  width: 55.75rem;
  border-left: 1px solid #40475c;
  border-right: 1px solid #40475c;
  @media (max-width: 63.75rem) {
      width: 100%;
    }
`;

export default Reviews;
