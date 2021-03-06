import React, {useEffect,useState} from 'react';
import styled from 'styled-components';

import review_data from '../../data/reviews.json';
import circle from '../../assets/circle.png';
import blue_dot from '../../assets/blue_dot.png';
import blue5_dot from '../../assets/blue5_dot.png';
import blue1_dot from '../../assets/blue1_dot.png';

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
                <div className="detail-title"><img src={blue5_dot} className="blue-dot"/>{data.detailTitle}</div>
                <div className="detail-text">{data.detailDetail}</div>
              </div>
            </div>
            <div className="detail-container" >
              <img src={circle} className="img-circle" style={{borderBottom:'1px solid #3C8AFF'}}/>
              <div className="detail-wrap">
                <div className="detail-title"><img src={blue_dot} className="blue-dot"/>서류</div>
                <div className="detail-text">- 자유 양식의 이력서+자기소개서 → 1차 면접 → 합격
                <br/>제출 약 3일 뒤 인터뷰를 하고 싶다는 메일이 왔고, 면접 일정을 조정하고 참석했다. 
                <br/>- 2:1 (면접관 2 지원자 1) 비대면 면접</div>
              </div>
            </div>
            <div className="detail-container" style={{borderBottom:'1px solid #37FFDB'}}>
              <img src={circle} className="img-circle"/>
              <div className="detail-wrap">
                <div className="detail-title"><img src={blue1_dot} className="blue-dot"/>면접</div>
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
      padding-top: 0;
      width: 100%;
    }

  .detail-container{
    position: relative;
    display: flex;
    flex-direction: row;
    margin-bottom: 3.75rem;

    @media (max-width: 63.75rem) {
      border-bottom: 1px solid #3153FF;

      margin-bottom: 0;
      padding: 1.5rem 1rem 2.125rem 1rem;
    }
  }

  .img-circle{
    position: absolute;
    top: 0.375rem;
    left: -0.5625rem;
    width: 1.0625rem;
    height: 1.0625rem;
    @media (max-width: 63.75rem) {
      display: none;
    }
  }

  .detail-wrap{
    display: flex;
    flex-direction: column;
    margin-left: 1.8125rem;

    @media (max-width: 63.75rem) {
      margin-left:0;
    }
  }

  .detail-title{
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 300;
    font-size: 1.2356rem;
    line-height: 2rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: row;

    @media (max-width: 63.75rem) {
      font-size: 1.125rem;
      line-height: 1.375rem;
      color: white;
      margin-bottom: 1rem;
    }

    .blue-dot{
      display: none;
      @media (max-width: 63.75rem) {
      display: flex;
      width: 1.125rem;
      height: 1.125rem;
      margin-right: 0.25rem;
    }
    }
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

    @media (max-width: 63.75rem) {
      margin: 2.5rem 1.75rem 2.25rem 1.75rem;
    }
  }
`;

export default Review;