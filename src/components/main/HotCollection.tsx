import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardLogo from "../../images/cardLogo.png"

function HotCollection() {

  const slideSettings = {
    dots:false,
    infinite:  true,
    speed: 1000,
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false,
    slidesToShow:3,
    activeSlide:0,
    itemWidth:300,
    clickToChange: true,
    // wrap:false,
  }

  const dummyCard = (
    <HotCollectionCard>
      <HotCollectionCardImageBox src={cardLogo} />

      <HotCollectionCardLine />

      <HotCollectionCardText>
        <HotCollectionCardP>
        Rank : 1
        </HotCollectionCardP>
        <HotCollectionCardH2>
        NFT Card Name
        </HotCollectionCardH2>
        <HotCollectionCardH3>
        20.12 ETH
        </HotCollectionCardH3>
      </HotCollectionCardText>
    </HotCollectionCard>
    )


  return (
    <HotCollectionWrap>
        <HotCollectionText>
          <HotCollectionTextH2>
            Hot Collection  
          </HotCollectionTextH2>

          <HotCollectionTextP>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Praesent convallis neque
            mi, vitae rhoncus felis mollis quis. Nulla
            condimentum, risus eu gravida pellentesque,
            est metus facilisis massa, nec dignissim mauris
            nisl tristique massa.
          </HotCollectionTextP>
        </HotCollectionText>

        <HotCollectionSlide>
          <Slider {...slideSettings}>
            {dummyCard}
            {dummyCard}
            {dummyCard}
            {dummyCard}
            {dummyCard}
          </Slider>
        </HotCollectionSlide>
    </HotCollectionWrap>
  )
}

export default HotCollection

const HotCollectionWrap = styled.div`
  display:flex;
  align-items:center;
  width:100%;
  height:800px;
  background: radial-gradient(89.8% 82.4% at 50% -5.75%, #2C5AFF 0%, #000E41 100%);
  overflow:hidden;
`

const HotCollectionText = styled.div`
  width:500px;
  color:#fff;
  margin-left:240px;
`

const HotCollectionTextH2 = styled.h2`
  width:500px;
  font-size:72px;
  margin-bottom:50px;
`

const HotCollectionTextP = styled.p`
  width:500px;
  font-size:24px;
  font-weight:300;
`

const HotCollectionSlide = styled.div`
  width:1095px;
  margin-left:160px;

  .slick-track{
    padding:20px 0px;
    /* transition: 0.5s; */
  }
  .slick-slide {
    width:300px;
    height:400px;
    margin-top:50px;
    padding:0 55px 0 10px;
    transition: 0.5s;
    filter: blur(3px);
    opacity:0.7;
  }
  .slick-current {
    margin-top:0px;
    filter: blur(0);
    opacity:1;
    transition: 0.5s;
  }
`
const HotCollectionCard = styled.div`
  position:relative;
  width:300px;
  height:400px;
  background-color:#000;
  border-radius:10px;
  box-shadow: 4px 4px 10px 0px;
  transform: 0.5s;
`

const HotCollectionCardImageBox = styled.img`
  width:250px;
  height:250px;
  padding:20px;
  margin:25px 0 0 25px; 
  background-color:#128CFC;
  border-radius:10px;
`

const HotCollectionCardLine = styled.span`
  position:absolute;
  width:100px;
  height:4px;
  background-color:#fff;
  top:273px;
  left:50%;
  transform: translateX(-50%);
  border-radius:4px;;
`

const HotCollectionCardText = styled.div`
  margin:30px 0 0 25px;
`

const HotCollectionCardP = styled.p`
  font-size:12px;
  color:#ccc;
`

const HotCollectionCardH2 = styled.h2`
  font-size:16px;
  color:#fff;
  margin:10px 0 10px;
`

const HotCollectionCardH3 = styled.h3`
  font-size:12px;
  color:#FCE412;
`