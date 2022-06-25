import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    //Noto Sans KR
    @font-face {
    font-family: 'Noto Sans KR','Apple SD Gothic Neo';
    font-weight: 200;
    src: url('../src/fonts/NotoSansKR-WEB/NotoSansKR-Thin.otf'),
    url('../src/fonts/NotoSansKR-WEB/NotoSansKR-Thin.woff'),
    url('../src/fonts/NotoSansKR-WEB/NotoSansKR-Thin.woff2');
    }
    @font-face {
    font-family: 'Noto Sans KR','Apple SD Gothic Neo';
    font-weight: 300;
    src: url('../src/fonts/NotoSansKR-WEB/NotoSansKR-Light.otf') ,
    url('../src/fonts/NotoSansKR-WEB/NotoSansKR-Light.woff'),
    url('../src/fonts/NotoSansKR-WEB/NotoSansKR-Light.woff2');
    }
    @font-face {
    font-family: 'Noto Sans KR','Apple SD Gothic Neo';
    font-weight: 400;
    src: url('../src/fonts/NotoSansKR-WEB/NotoSansKR-Regular.otf'),
    url('../src/fonts/NotoSansKR-WEB/NotoSansKR-Regular.woff'),
    url('../src/fonts/NotoSansKR-WEB/NotoSansKR-Regular.woff2');
    } 
    @font-face {
    font-family: 'Noto Sans KR','Apple SD Gothic Neo';
    font-weight: 500;
    src: url('../src/fonts/NotoSansKR-WEB/NotoSansKR-Medium.woff'),
    url('../src/fonts/NotoSansKR-WEB/NotoSansKR-Medium.woff2');
    }
    @font-face {
    font-family: 'Noto Sans KR','Apple SD Gothic Neo';
    font-weight: 600;
    src: url('../src/fonts/NotoSansKR-WEB/NotoSansKR-Bold.ttf'),
    url('../src/fonts/NotoSansKR-WEB/NotoSansKR-Bold.woff'),
    url('../src/fonts/NotoSansKR-WEB/NotoSansKR-Bold.woff2');
    }


    .notoThin {
    font-family: 'Noto Sans KR','Apple SD Gothic Neo';
    font-weight: 200;
    }
    .notoLight {
    font-family: 'Noto Sans KR','Apple SD Gothic Neo';
    font-weight: 300;
    }
    .notoRegular {
    font-family: 'Noto Sans KR','Apple SD Gothic Neo';
    font-weight: 400;
    }
    .notoMedium {
    font-family: 'Noto Sans KR','Apple SD Gothic Neo';
    font-weight: 500;
    }
    .notoBold {
    font-family: 'Noto Sans KR','Apple SD Gothic Neo';
    font-weight: 700;
    }

    .gothamRegular{
        font-family: 'Gotham', sans-serif;
        font-weight: 400;
    }
    .gothamBold{
        font-family: 'Gotham', sans-serif;
        font-weight: 700;
    }

`;

export const PageWrap = styled.div`
  position: absolute;
  max-width: 120.125rem;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: #1F2129;
  @media (max-width: 71.875rem) {
    width: 22.5rem;
    width: 100%;
    overflow-x: hidden;
  }
`;