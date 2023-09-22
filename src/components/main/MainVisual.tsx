import React, { useEffect, useState } from "react";
import { styled } from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import simpsonMainVisual from '../../images/simpsonMainVisual.png';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function MainVisual() {
  
  const slideSettings = {
    dots:true,
    infinite:  true,
    speed: 500,
    autoplay:true,
    arrows:true,
    nextArrow: (
      <NextArrow>
        <IoIosArrowForward />
      </NextArrow>
    ),
    prevArrow: (
      <PrevArrow>
        <IoIosArrowBack />
      </PrevArrow>
    )
  }


  return (
    <MainVisualWrap>

      <Slider {...slideSettings}>
        <SliderBox>
        <MainVisualImg src={simpsonMainVisual}></MainVisualImg>

          <MainVisualTextBox>
            <MainVisualTextTitle>
              The Simpson NFT
            </MainVisualTextTitle>

            <MainVisualTextContents>
              2023년 9월 14일(목) 14:00<br/>
              The Simpson NFT 판매 시작 합니다.<br/>
              14:00 on Thursday, September 14, 2023<br/>
              The Simpson NFT sales begin.<br/>
            </MainVisualTextContents>

            <MainVisualTextButton>
            View
            </MainVisualTextButton>
          </MainVisualTextBox>
        </SliderBox>

        <SliderBox>
        <MainVisualImg src={simpsonMainVisual}></MainVisualImg>

          <MainVisualTextBox>
            <MainVisualTextTitle>
              The Simpson NFT
            </MainVisualTextTitle>

            <MainVisualTextContents>
              2023년 9월 14일(목) 14:00<br/>
              The Simpson NFT 판매 시작 합니다.<br/>
              14:00 on Thursday, September 14, 2023<br/>
              The Simpson NFT sales begin.<br/>
            </MainVisualTextContents>
            
            <MainVisualTextButton>
            View
            </MainVisualTextButton>
          </MainVisualTextBox>
        </SliderBox>

        <SliderBox>
        <MainVisualImg src={simpsonMainVisual}></MainVisualImg>

          <MainVisualTextBox>
            <MainVisualTextTitle>
              The Simpson NFT
            </MainVisualTextTitle>

            <MainVisualTextContents>
              2023년 9월 14일(목) 14:00<br/>
              The Simpson NFT 판매 시작 합니다.<br/>
              14:00 on Thursday, September 14, 2023<br/>
              The Simpson NFT sales begin.<br/>
            </MainVisualTextContents>
            
            <MainVisualTextButton>
              View
            </MainVisualTextButton>
            
          </MainVisualTextBox>
        </SliderBox>
      </Slider>

    </MainVisualWrap>

  )
}

export default MainVisual

const MainVisualWrap = styled.div`
  position:relative;
  height:600px;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-arrow:hover{
    color:#fff;
    opacity:1;
  }
  .slick-dots{
    bottom:10px;

  }
  .slick-dots li button:before {
    content:"";
    width:100%;
    height:4px;
    border-radius: 5px;
    background-color:#fff;
  }
  li.slick-active {
    width:35px;
    transition:0.5s ease;
  }
  .slick-slider {
    height:600px;
  }
`

const SliderBox = styled.div`
  position:relative;
`

const MainVisualImg = styled.img`
  width:100%;
  height:600px;
  object-fit: cover;
  pointer-events: none;
`

const NextArrow = styled.div`
  position:absolute;
  z-index:999;
  top:50%;
  right:240px;
  transform:translateY(-50%);
  color:#fff;
  opacity:0.7;
  font-size:40px;
  transition:0.3s linear;
`

const PrevArrow = styled.div`
  position:absolute;
  z-index:999;
  top:50%;
  left:240px;
  transform:translateY(-50%);
  color:#fff;
  font-size:40px;
  transition:0.3s linear;
  opacity:0.7;
`

const MainVisualTextBox = styled.div`
  max-width:500px;
  position:absolute;
  top:100px;
  left:20%;
`

const MainVisualTextTitle = styled.h2`
  font-size:48px;
  margin-bottom:30px;
  font-weight:700;
  letter-spacing:-1px;
`

const MainVisualTextContents = styled.p`
  font-size:24px;
  line-height:130%;
  letter-spacing:-1px;
`

const MainVisualTextButton = styled.button`
  width:100px;
  height:40px;
  line-height:30px;
  font-size:16px;
  font-weight:700;
  background-color:#fff;
  color:#000;
  border-radius:5px;
  text-align:center;
  text-transform: uppercase;
  box-shadow:2px 2px 4px 0px #000;
  margin-top:20px;
  opacity:0.7;
  &:hover{
    opacity:1;
  }
`