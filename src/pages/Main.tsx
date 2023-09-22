import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import MainVisual from '../components/main/MainVisual';
import HotCollection from '../components/main/HotCollection';
import NftLists from '../components/main/NftLists';
import AOS from "aos";
import "aos/dist/aos.css";
import MainCreate from '../components/main/MainBanner';

function Main() {

  useEffect(() => {
    AOS.init();
  })

  return (
    <MainWrap>

      <MainVisual />
      <MainCreate />
      <HotCollection />
      <NftLists />

    </MainWrap>
  )
}

export default Main

const MainWrap = styled.div`
    position:relative;
    width:100%;
    background-color:#ccc;
`
