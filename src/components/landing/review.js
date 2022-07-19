import React, {useEffect,useState} from 'react';
import styled from 'styled-components';

import review_data from '../../data/reviews.json';
import circle from '../../assets/circle.png';

const Review = ({id}) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    review_data.reviews.map((item) => {
      if(id === item.id){
        setData(item);
      }
    })
}, [id])

  return (
    <Wrap>
          <TitleWrap>
            <div className="company-text">{data.company} ・ <span className="gothamRegular date-text">{data.date}</span></div>
            <div className="title-text">{data.title}</div>
          </TitleWrap>
          <DetailWrap>
            <div className="detail-container">
              <img src={circle} className="img-circle"/>
              <div className="detail-wrap">
                <div className="detail-title">{data.detailTitle}</div>
                <div className="detail-text">{data.detailDetail}</div>
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
        </Wrap>
  )
}

const Wrap = styled.div`
    width: 100%;
    white-space: pre-wrap;
    @media (max-width: 63.75rem) {
    width: 23.125rem;
  }
`;

const TitleWrap = styled.div`
  width: 100%;
  padding: 3.25rem 0 2.375rem 2.3125rem;

  @media (max-width: 63.75rem) {
      padding: 1.5rem 1.25rem;
    }

  .company-text{
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #B9BFD3;
    @media (max-width: 63.75rem) {
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 400;
    }
  }

  .date-text{
    font-family: 'Gotham';
    font-style: normal;
    font-weight: 400;
    @media (max-width: 63.75rem) {
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 400;
    }
  }

  .title-text{
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 300;
    font-size: 1.843rem;
    line-height: 2.75rem;

    color: #E9E9E9;
    @media (max-width: 63.75rem) {
      font-size: 1.1106rem;
      line-height: 1.625rem;
    }
  }
`;

const DetailWrap = styled.div`
  width: 100%;
  padding-top: 4.375rem;
  border-top: 1px solid #40475C;
  color: #E9E9E9;

  @media (max-width: 63.75rem) {
      padding-top: 1.5rem;
    }

  .detail-container{
    position: relative;
    display: flex;
    flex-direction: row;
    margin-bottom: 3.75rem;
  }

  .img-circle{
    position: absolute;
    top: 0.375rem;
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

export default Review;