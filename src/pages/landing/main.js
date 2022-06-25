import React from 'react'
import Download from '../../components/landing/download'
import Reviews from '../../components/landing/reviews'
import Top from '../../components/landing/top'
import Footer from '../../components/shared/footer'
import { PageWrap } from '../../shared/styled'

const Main = () => {
  return (
    <PageWrap>
        <Top/>
        <Reviews/>
        <Download/>
        <Footer/>
    </PageWrap>
  )
}

export default Main