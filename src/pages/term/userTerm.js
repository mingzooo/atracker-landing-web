import React from "react";
import styled from "styled-components";
import { PageWrap } from "../../shared/styled";

import term_data from '../../data/userTerm.json';

const UserTerm = () => {

  return (
    <PageWrap>
      <TermWrap>
        <div className="title">고객 이용약관</div>
        <div className="detail">{term_data.terms[0].userTerm}</div>
      </TermWrap>
    </PageWrap>
  );
};

const TermWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.875rem 1.75rem;
  white-space: pre-wrap;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #ffffff;

  .title{
    margin-bottom: 2.3125rem;
  }

  .detail{
    font-size: 0.75rem;
  }
`;
export default UserTerm;
